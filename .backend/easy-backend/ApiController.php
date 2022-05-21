<?php

/* 
 * I created this micro library because i was bored so i tried to 
 * mimic the Express JS format in PHP xD
 * 
 * This is a class that is used to create an API Like Express (minimalist) 
 * @author Michael Araque
 * @date 21/05/2021
 */

class ApiController
{

    /* It's the base path of the API. It's used to remove the base path from the request url. */
    public static $base_path = '/easy-backend';

    /**
     * It detects the request type and executes the callback function if the request type matches the
     * one passed to the function
     * 
     * @param string type The type of request you want to detect.
     * @param callable func The function to be called if the request type matches.
     */
    public static function detectRequest(string $type, callable $func): void {
        $request_type = strtoupper($type);

        if ($_SERVER['REQUEST_METHOD'] === $request_type) {
            $func($request_type);
        }
    }

    /**
     * It takes a path, a type, and a function, and returns the function with the path and type as
     * parameters.
     * 
     * @param path The path of the request.
     * @param type GET, POST, PUT, DELETE
     * @param func The function that will be called when the request is made.
     * 
     * @return callable|null return value of the function passed to the requestHandler function.
     */
    public static function requestHandler($path, $type, $func) {
        
        $data = str_replace(self::$base_path, '', $_SERVER['REQUEST_URI']);
        $poc_of_entry = array_values(
            array_filter(
                explode('/', str_replace(':', '', $path)
            ), 'strlen')
        );
        $poc_of_query = array_values(array_filter(explode('/', $data), 'strlen'));

        $all_params = array_combine($poc_of_entry, $poc_of_query);
        $params = array_slice($all_params, 1);

        if (array_keys($all_params)[0] !== array_values($all_params)[0]) {
            $controller = new ApiController;
            return $controller->json([
                'ok' => false
            ]);
        }

        $object = (object) [
            'url' => $path,
            'method' => $type,
            'params' => $params,
            'query' => (object) array_merge(array_map(function ($item) {
                if (strpos('/', $item)) {
                    return explode('/', $item)[1];
                }
                return $item;
            }, $_REQUEST), $all_params)
        ];

        return $func($object, new ApiController);
    }

    /**
     * It takes an array, converts it to JSON, and then outputs it to the browser.
     * 
     * @param array data The data to be encoded. Can be any type except a resource.
     * @return ApiController The ApiController object.
     */
    public function json(array $data): ApiController {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data);
        return $this;
    }

    /**
     * It sends data to the client
     * 
     * @param string data The data to be sent to the client.
     * @return ApiController The ApiController object.
     */
    public function send(string $data): ApiController {
        header('Content-Type: text/plain; charset=utf-8');
        echo $data;
        return $this;
    }

    /**
     * This function sets the HTTP response code to the value passed in as a parameter.
     * 
     * @param int status The HTTP status code to send.
     * @return ApiController The ApiController object.
     */
    public function sendStatus(int $status = 200): ApiController {
        http_response_code($status);
        return $this;
    }

    /**
     * "If the request type is GET, then call the requestHandler function with the url, request type,
     * and the callback function."
     * 
     * The requestHandler function is called with the url, request type, and the callback function.
     * 
     * The requestHandler function is defined as follows:
     * 
     * @param string url The url to be requested
     * @param callable func The function that will be called when the request is made.
     */
    public static function get(string $url, callable $func): void {

        self::detectRequest(__FUNCTION__, function ($type) use (
            $func,
            $url
        ) {
            self::requestHandler($url, $type, $func);
        });
    }


    /**
     * It takes a string and a callable as arguments, and then calls the detectRequest function, which
     * takes a string and a callable as arguments, and then calls the requestHandler function, which
     * takes a string, a string, and a callable as arguments.
     * 
     * @param string url The url to be requested
     * @param callable func The function that will be called when the request is made.
     */
    public static function post(string $url, callable $func): void {

        self::detectRequest(__FUNCTION__, function ($type) use (
            $func,
            $url
        ) {
            self::requestHandler($url, $type, $func);
        });
    }
}
