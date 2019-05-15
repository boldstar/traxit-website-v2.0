<template>
    <footer>
        <div class="footer-contents">
            <div class="footer-contents-left">
                <span class="copy">&copy; 2019 TRAXIT | All Rights Reserved</span>
                <div class="policies">
                    <g-link class="policy-link" to="/privacy">Privacy Policy</g-link>
                    <span>|</span>
                    <g-link class="policy-link" to="/terms">Terms of Service</g-link>
                    <span>|</span>
                    <g-link class="policy-link" to="/refunds">Refund Policy</g-link>
                </div>
            </div>
            <div class="footer-contents-right">
                <span>info@traxit.io</span>
                <span>(936) 213-0639</span>
                <div class="social-links">
                    <a href="https://www.facebook.com/traxit" class="social-link"><i class="fab fa-facebook-square fa-2x"></i></a>
                    <a href="https://www.linkedin.com/company/35691465" class="social-link"><i class="fab fa-linkedin fa-2x"></i></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    footer {
        background: var(--lightgray);
        padding: 10px;
        width: 100%;
        position: relative;
        padding: 0;
    }

    .footer-contents {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        height: 100%;
        padding: 10px 35px;
    }

    .copy {
        font-size: 1.2rem;
        margin-bottom: 5px;
    }

    .policies {
        display: flex;
    }

    .policy-link {
        margin: 0 10px;
        text-decoration: none;
        color:  var(--main);
    }

    .footer-contents-left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .footer-contents-right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        width: 150px;
    }

    .social-links {
        display: flex;
    }

    .social-link {
        color: var(--darkgray);
        margin-right: 10px;
        cursor: pointer;
    }

    @media screen and (max-width: 767px) {
       .copy {
           font-size: .8rem;
       }

       .policies {
           font-size: .8rem;
       }

       .footer-contents {
           flex-direction: column;
           justify-content: center;
           align-items: center;
       }

       .footer-contents-left {
           align-items: center;
       }

       .footer-contents-right {
           align-items: center;
       }
    }
</style>
