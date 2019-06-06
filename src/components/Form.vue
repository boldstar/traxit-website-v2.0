<template>
  <form action="https://traxit.us20.list-manage.com/subscribe/post?u=554da9b25bb5346ae99219141&amp;id=d85b539abe" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate form" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">
        <div class="input-group">
          <label for="first_name">First Name</label>
          <input type="text" value="" name="MMERGE1" class="required mailchimp-input" id="mce-MMERGE1" placeholder="First Name" required>
        </div>
        <div class="input-group">
          <label for="last_name">Last Name</label>
          <input type="text" value="" name="MMERGE2" class="required mailchimp-input" id="mce-MMERGE2" placeholder="Last Name" required>
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input ref="mailchimp" type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="Email Address" class="required mailchimp-input" required>
        </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_554da9b25bb5346ae99219141_d85b539abe" tabindex="-1" value=""></div>
          <div class="clear"><input type="submit" value="Register" name="subscribe" id="mc-embedded-subscribe" class="form-btn"></div>
      </div>
  </form>
</template>

<script>

export default {
  name: 'Form',
  props: ['slogan'],
  data() {
    return {
      
    }
  },
  methods: {
  
  }
}
</script>

<style>

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 15px 8px rgba(0, 0, 0, 0.164); 
    padding: 15px;
    border-radius: 5px;
    background: var(--white);
  }

  input {
    padding: 10px;
    border: .5px solid #b4b4b4;
    border-radius: 3px;
    margin-bottom: 10px;
    font-size: 1.1rem;
    width: 100%;
    box-sizing: border-box;
  }

  .form-btn {
    padding: 10px;
    background: var(--main);
    color: white;
    font-weight: bold;
    font-size: 1.25rem;
    border: none;
    border-radius: 3px;
    width: 100%;
    cursor: pointer;
    box-shadow: 0 0 5px 0 rgba(0,0,0,.25)
  }

  .input-group {
    width: 500px;
  }

  @media screen and (max-width: 950px) {
      .input-group {
          max-width: 400px;
      }
  }

  @media screen and (max-width: 458px) {
    .input-group {
      width: 100%;
    }
  }
</style>

