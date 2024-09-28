<!DOCTYPE html>
<html>
    <head>
        <title>Aston First Floor</title>

        <link rel="stylesheet" href="style/general.css">
        <link rel="stylesheet" href="style/header.css">
        <link rel="stylesheet" href="style/machines.css">
        <link rel="stylesheet" href="style/sidebar.css">
    </head>


    <body>
        
        <?php include "includes/header.php" ?>

        <?php include "includes/login.php" ?>

        <?php include "includes/floors.php" ?>
        
        <div class="machines">
                <div class="layout">
                    <div class="dryer"><img class="machine" src="LaundryIcons/dryer_empty.png"></div>
                    <div class="washer"><img class="machine" src="LaundryIcons/washer_empty.png"></div>
                    <div class="dryer"><img class="machine" src="LaundryIcons/dryer_empty.png"></div>
                    <div class="washer"><img class="machine" src="LaundryIcons/washer_empty.png"></div>
                </div>
                <div class="interactions">
                    <div class="machine-name">Washer /number/:</div>
                    <div class="machine-stat">Status: /status/</div>
                    <div class="machine-stat">Time remaining: /time/</div>
                    <div class="machine-stat" id="use-but">Use Machine</div>
                </div>
        </div>

        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        <script src="script.js"></script>
    </body>
</html>
