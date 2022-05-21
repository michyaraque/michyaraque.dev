<?php
require "ApiController.php";

/* header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With"); */

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
