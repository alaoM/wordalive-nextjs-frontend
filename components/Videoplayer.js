import React from 'react'
import ReactPlayer from 'react-player'


const Videoplayer = ({url}) => {
  return (
    <>
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <ReactPlayer url={url}/>
    </div>
  </div>
</div>
    </>
  )
}

export default Videoplayer