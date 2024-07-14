<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kirby Vite Basic</title>
  <?= vite()->js('main.js', ['defer' => true]) ?>
  <!-- We imported `tailwind.css` inside `main.js`, so `main.js` is the Vite
  entry containing our CSS. -->
  <?= vite()->css('main.js') ?>
</head>
<body>