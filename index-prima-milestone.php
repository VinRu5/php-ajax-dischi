<?php

    require_once __DIR__ . '/backend/database.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <title>Dischi</title>
</head>
<body>
    <header>
        <div class="logo-container">
            <img src="./img/spotify-logo.png" alt="logo Spotify">
        </div>

    </header>
    <main>
        <div class="container">
            <div class="row-me">

                <?php 
                    foreach ($albums as $album) { 
                ?>
                <div class="album-container">
                    <div class="album-inner">
                        <div class="img-container">
                            <img src="<?php echo $album['poster'] ?>" alt="<?php echo $album['title'] . 'di' . $album['author']?>">
                        </div>
                        <h3 class="title-album"><?php echo $album['title'] ?></h3>
                        <div class="info-album">
                            <div class="artist"><?php echo $album['author'] ?></div>
                            <div class="year"><?php echo $album['year'] ?></div>
                        </div>

                    </div>
                </div>
                <?php } ?>


            </div>
        </div>
    </main>
    
</body>
</html>