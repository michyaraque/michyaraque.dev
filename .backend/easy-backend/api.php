<?php
require "ApiController.php";

header('Access-Control-Allow-Origin: https://michyaraque.dev');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Content-Type");

$same_site = '/https:\/\/(w{3}|w*).?michyaraque\.dev/';
if(!preg_match($same_site, $_SERVER['HTTP_REFERER']) == 1){
    $controller = new ApiController;
    $controller->json([
        'ok' => false,
        'description' => 'called by different origin'
    ]);
    return $controller->sendStatus(404);
}

ApiController::get('/views/:slug', function ($req, $res) use ($redis) {
    $slug = $req->query->slug;

    if (!empty($slug)) {

        $redis = new Redis();
        $redis->connect('localhost', 6379);
        $redis->select(22);
        $total = 0;

        if (!$redis->exists($slug)) {
            $redis->hmSet($slug, ['views_counter' => 0]);
            $res->sendStatus(304);
        }

        $total = $redis->hMGet($slug, ['views_counter'])['views_counter'];

        $res->json([
            'total' => (int) $total
        ]);

        $res->sendStatus(200);
    }
});

ApiController::post('/views/:slug', function ($req, $res) use ($redis) {
    $slug = $req->query->slug;
    if (!empty($slug)) {

        $redis = new Redis();
        $redis->connect('localhost', 6379);
        $redis->select(22);
        $total = 0;

        if (!$redis->exists($slug)) {
            $redis->hmSet($slug, ['views_counter' => 0]);
            $res->sendStatus(304);
        }

        $total = $redis->hIncrBy($slug, 'views_counter', 1);

        $res->json([
            'total' => $total
        ]);

        $res->sendStatus(200);
    }
});
