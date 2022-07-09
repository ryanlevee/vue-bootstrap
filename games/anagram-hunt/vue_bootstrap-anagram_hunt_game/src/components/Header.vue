<template>
  <header>
    <nav class="navbar navbar-dark navbar-expand-lg bg-secondary bg-opacity-50 p-0">
      <div class="container-fluid">
        <a id="play2learn-logo-link" class="navbar-brand p-0 d-none d-sm-block" href="#">
          <img src="./images/play2learn-logo-banner-transparent_web-xs.png"
            id="play2learn-logo" title="Play2Learn!" alt="Play2Learn">
        </a>
        <div class="d-sm-none">
          <p class="display-6 py-2 my-auto fw-normal">Play2Learn</p>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav w-100 nav-justified">
            <li class="nav-item btn btn-outline-secondary border-0">
              <a class="nav-link text-uppercase fs-5 text-black active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item dropdown btn btn-outline-secondary border-0">
              <a class="nav-link dropdown-toggle text-uppercase fs-5 text-black" href="#"
                id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Games
              </a>
              <ul class="dropdown-menu bg-secondary w-100" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item text-uppercase fs-5 text-black p1"
                    href="#" style="padding:1rem">
                    Anagram Hunt
                  </a>
                </li>
                <li>
                  <a class="dropdown-item text-uppercase fs-5 text-black"
                    href="#" style="padding:1rem">
                    Math Facts Practice
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item btn btn-outline-secondary border-0">
              <a class="nav-link text-uppercase fs-5 text-black" href="#">
                About
              </a>
            </li>
            <li class="nav-item btn btn-outline-secondary border-0">
              <a class="nav-link text-uppercase fs-5 text-black" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Header-El'
  }
</script>