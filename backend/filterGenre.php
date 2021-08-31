<?php

require_once __DIR__ . '/../database/database.php';
require_once __DIR__ . '/../functions/echoJson.php';

$genre = $_GET["genre"];

$filterOfGenre = function ($album) use ($genre) {
    return strtolower($album['genre']) === strtolower($genre);
};

$albumsByGenre = array_filter($albums, $filterOfGenre);

arrayJson($albumsByGenre);