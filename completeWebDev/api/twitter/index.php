<?php
    session_start();
    require "twitteroauth/autoload.php";
    use Abraham\TwitterOAuth\TwitterOAuth;
    $apiKey = 'bnro0MlaN9vsNONCDepwULZ9d';
    $apiSecret = 'iTPeI98DREUofLGYwTlCFn4fvSjBFDzgs8GVvbPGVmLhy1X1gM';
    $accessToken = '2613989900-GJcqki2KLjDmUvDJKo6zhPGhrZAUWLUPgne6BwW';
    $accessSecret = 'U8ZeDZ81mvDFHyEUFfVIlCOpYvJIZs3O5TyDWCqM4Fm8z';
    $connection = new TwitterOAuth($apiKey, $apiSecret, $accessToken, $accessSecret);

    $tweets = $connection->get("statuses/home_timeline" ,array("count"=>10));
//    echo json_encode($tweets);
    foreach ($tweets as $tweet) {


        $favorites =  $tweet -> favorite_count;
        if($favorites>=0) {
            $tweetEmbed = $connection -> get("statuses/oembed", array("id"=>$tweet->id));
//            print_r($tweetEmbed);
            echo $tweetEmbed->html;
        }
    }
//    $sampleTweet = "'Context is key'; http://techcrunch.com/2015/08/18/the-future-of-the-web-is-all-about-context/ ";
//    $updateStatus = $connection -> post("statuses/update", array("status"=>$sampleTweet));
?>