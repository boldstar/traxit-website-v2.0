<template>
    <section class="pricing">
        <div class="pricing-content">
            <div class="pricing-details">
                <h2 class="pricing-details-header">Pricing</h2>
                <p>Currently we are offering a <strong>FREE 90 DAY TRIAL</strong> to give firms the opportunity to test, experience and decide if our tool is the right fit. Once the 90 day trial has expired the "Basic Plan" will kick in. If you decide to not continue using TRAXIT there will be no issues. If at some point you change your mind after the account has expired and would like to re-activate it, please call our team at (111) 222-3333</p>
            </div>
            <div class="pricing-card">
                <div class="pricing-card-headers">
                    <h2 class="pricing-card-header">Basic Plan</h2>
                    <h2 class="pricing-card-header">$50/mth</h2>
                </div>
                <ul>
                    <li class="pricing-card-feature">
                        <span class="pricing-feature-name"><i>Dashboard</i></span>
                        <Checkmark class="checkmark" />
                    </li>
                    <li class="pricing-card-feature">
                        <span class="pricing-feature-name"><i>Workflows</i></span>
                        <Checkmark class="checkmark" />
                    </li>
                    <li class="pricing-card-feature">
                        <span class="pricing-feature-name"><i>Engagements</i></span>
                        <Checkmark class="checkmark" />
                    </li>
                    <li class="pricing-card-feature">
                        <span class="pricing-feature-name"><i>Tasks</i></span>
                        <Checkmark class="checkmark" />
                    </li>
                    <li class="pricing-card-feature">
                        <span class="pricing-feature-name"><i>Reports</i></span>
                        <Checkmark class="checkmark" />
                    </li>
                    <li class="pricing-card-feature">
                        <span class="pricing-feature-name"><i>Support</i></span>
                        <Checkmark class="checkmark" />
                    </li>
                </ul>
                <button type="button" class="pricing-btn">Request Free Demo Now</button>
            </div>
            <Subscription class="subscription" />
        </div>
    </section>
</template>

<script>
import Checkmark from '~/assets/svg/checkmark.svg'
import Subscription from '~/assets/svg/subscription.svg'
export default {
    name: 'Pricing',
    components: {
        Checkmark,
        Subscription
    }
}
</script>

<style>

.pricing {
    width: 100%;
    min-height: calc(100vh - 80px);
}

.pricing-content {
    position: relative;
    max-width: 1120px;
    margin: 0 auto;
    display: flex; 
    justify-content: space-between;
}

.pricing-details {
    max-width: 400px;
}

.pricing-details p {
    margin-top: 0;
}

.pricing-details-header {
    font-size: 3rem;
    color: var(--main);
    margin-bottom: 0;
}

.pricing-card {
    width: 400px;
    background: var(--lightgray);
    margin-top: 50px;
    align-self: flex-start;
    padding: 20px;
    padding-top: 10px!important;
    border-radius: 10px;
    box-shadow: 0 0 5px 0 rgba(0,0,0,.25)
}

.pricing-card-feature {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
}

ul {
    margin: 0;
    background-color: var(--white);
    padding: 10px 15px;
    border-radius: 5px;
}

.pricing-card-headers {
    display: flex;
    justify-content: space-between;
}

.pricing-card-header {
    margin: 0;
    margin-bottom: 5px!important;
}

.pricing-feature-name {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--main);
}

.pricing-btn {
    padding: 10px;
    background: var(--main);
    color: white;
    font-weight: bold;
    font-size: 1.25rem;
    border: none;
    border-radius: 3px;
    width: 100%;
    cursor: pointer;
    box-shadow: 0 0 5px 0 rgba(0,0,0,.25);
    margin-top: 10px;
}

.subscription {
    position: absolute;
    bottom: -200px;
    left: 50px;
}

@media screen and (max-width: 1160px) {
    .pricing-content {
        padding: 20px;
    }
}

@media screen and (max-width: 1000px) {
    .subscription {
        left: 0;
        bottom: 50px;
        z-index: -100;
    }

    .pricing-content {
        flex-direction: column;
        align-items: center;
    }

    .pricing-card {
        align-self: flex-end;
    }

    .pricing-details {
        width: 90%!important;
        max-width: 900px;
    }
}

@media screen and (max-width: 500px) {
    .subscription {
        display: none;
    }

    .pricing-card {
        max-width: 350px;
        width: 90%;
        align-self: center;
    }
}

</style>
