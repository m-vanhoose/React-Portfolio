import React from 'react';

export default function Contact() {
  return (
    <div>
      <div class="container componentContainer">
        <p class="componentHead">Contact</p>
      </div>
      <div class="container componentContent">
        <div class="row">
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input type="email" class="form-control" placeholder="name@example.com">
            </input>
          </div>
          <div class="mb-3">
            <label for="Message" class="form-label">
              Message
            </label>
            <textarea class="form-control" rows="7">
            </textarea>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <input class="btn btn-primary submit" type="submit" value="Submit" id="submitBtn"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
