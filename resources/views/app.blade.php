<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin Login </title>


    {{-- dashboard css  --}}
      <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&amp;display=fallback">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ url('/')}}/assets/backend/plugins/fontawesome-free/css/all.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="{{ url('/')}}/assets/backend/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Tempusdominus Bootstrap 4 -->
    <link rel="stylesheet" href="{{ url('/')}}/assets/backend/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
    <!-- iCheck -->
    <link rel="stylesheet" href="{{ url('/')}}/assets/backend/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
    <!-- JQVMap -->
    <link rel="stylesheet" href="{{ url('/')}}/assets/backend/plugins/jqvmap/jqvmap.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ url('/')}}/assets/backend/dist/css/adminlte.min2167.css?v=3.2.0">
    <!-- overlayScrollbars -->
    <link rel="stylesheet" href="{{ url('/')}}/assets/backend/plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="{{ url('/')}}/assets/backend/plugins/daterangepicker/daterangepicker.css">
    <!-- summernote -->
    <link rel="stylesheet" href="{{ url('/')}}/assets/backend/plugins/summernote/summernote-bs4.min.css">


    {{-- login css  --}}
	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="{{ url('/')}}/assets/login/css/style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
    />
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />

</head>
<body>
    <div id="app"></div>
    @viteReactRefresh
    {{-- @vite('resources/js/app.jsx') --}}
    @vite('resources/js/app.js')

</body>



{{-- dashboard js  --}}
<!-- jQuery -->
<script src="{{ url('/')}}/assets/backend/plugins/jquery/jquery.min.js"></script>
<!-- jQuery UI 1.11.4 -->
<script src="{{ url('/')}}/assets/backend/plugins/jquery-ui/jquery-ui.min.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>
<!-- Bootstrap 4 -->
<script src="{{ url('/')}}/assets/backend/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- ChartJS -->
<script src="{{ url('/')}}/assets/backend/plugins/chart.js/Chart.min.js"></script>
<!-- Sparkline -->
<script src="{{ url('/')}}/assets/backend/plugins/sparklines/sparkline.js"></script>
<!-- JQVMap -->
<script src="{{ url('/')}}/assets/backend/plugins/jqvmap/jquery.vmap.min.js"></script>
<script src="{{ url('/')}}/assets/backend/plugins/jqvmap/maps/jquery.vmap.usa.js"></script>
<!-- jQuery Knob Chart -->
<script src="{{ url('/')}}/assets/backend/plugins/jquery-knob/jquery.knob.min.js"></script>
<!-- daterangepicker -->
<script src="{{ url('/')}}/assets/backend/plugins/moment/moment.min.js"></script>
<script src="{{ url('/')}}/assets/backend/plugins/daterangepicker/daterangepicker.js"></script>
<!-- Tempusdominus Bootstrap 4 -->
<script src="{{ url('/')}}/assets/backend/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
<!-- Summernote -->
<script src="{{ url('/')}}/assets/backend/plugins/summernote/summernote-bs4.min.js"></script>
<!-- overlayScrollbars -->
<script src="{{ url('/')}}/assets/backend/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
<!-- AdminLTE App -->
<script src="{{ url('/')}}/assets/backend/dist/js/adminlte2167.js?v=3.2.0"></script>
<!-- AdminLTE for demo purposes -->
{{-- <script src="{{ url('/')}}/assets/backend/dist/js/demo.js"></script> --}}
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<script src="{{ url('/')}}/assets/backend/dist/js/pages/dashboard.js"></script>

{{-- login js  --}}
<script src="{{ url('/')}}/assets/login/js/jquery.min.js"></script>
<script src="{{ url('/')}}/assets/login/js/popper.js"></script>
<script src="{{ url('/')}}/assets/login/js/bootstrap.min.js"></script>
<script src="{{ url('/')}}/assets/login/js/main.js"></script>

</html>
