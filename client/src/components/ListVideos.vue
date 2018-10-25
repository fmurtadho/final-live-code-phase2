<template>
    <div class="col-xl-7">
          <div class="mt-4">

            <!-- Search Form -->
            <form>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search videos across YouTube..."
                  aria-label="Search videos across YouTube..."
                  aria-describedby="go-button-addon"
                  auto-complete="off"
                  autofocus>
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="go-button-addon">
                    Go!
                  </button>
                </div>
              </div>
            </form>

            <!-- Video List -->
            <ul class="list-unstyled">
              <a href="JavaScript:Void(0);" class="video-link">
                <li class="media my-4">
                  <img class="mr-3" src="https://via.placeholder.com/120x90" alt="Thumbnail">
                  <div class="media-body">
                    <h5 class="mt-0 mb-1">Video Title</h5>
                    Video Description
                    <br />
                  </div>
                </li>
              </a>
              <a href="JavaScript:Void(0);" class="video-link">
                <li class="media my-4">
                  <img class="mr-3" src="https://via.placeholder.com/120x90" alt="Thumbnail">
                  <div class="media-body">
                    <h5 class="mt-0 mb-1">Video Title</h5>
                    Video Description
                    <br />
                  </div>
                </li>
              </a>
              <a href="JavaScript:Void(0);" class="video-link">
                <li class="media my-4">
                  <img class="mr-3" src="https://via.placeholder.com/120x90" alt="Thumbnail">
                  <div class="media-body">
                    <h5 class="mt-0 mb-1">Video Title</h5>
                    Video Description
                    <br />
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
