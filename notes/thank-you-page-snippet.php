<?php
$params = [];
if (!isset($_GET['first-name']) ||
    !isset($_GET['first-name']) ||
    !isset($_GET['email']) ||
    !isset($_GET['phone'])) {
  echo '<meta http-equiv="refresh" content="0;url=/contact-form/">';
  exit();
}
$output = <<<HTML
  <h1>Thank You!</h1>
  <p>We appreciate your interest in whatever it is we do, {$_GET['first-name']}! Here's what you submitted:</p>
HTML;
$output .= '<ul>';
foreach($_GET as $key => $value) {
  $output .="<li>{$key}: {$value}</li>";
}
$output .= '</ul>';
echo $output;
?>
