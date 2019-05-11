<template>
    <div class="why">
        <div class="why-content">
            <h2 class="why-header">Why?</h2>
            <p class="why-statement">After years of working as CPA and small business owner, Aurelia Weems still struggled to find a software tool that could help manage the backend of her business and create transperancy with her and her clients. The fact is that most web applications are built to broadly cover as many industries as possible and can be hard to integrate. It was decided that there could still be room for a application built specifically for the accounting/financial industry and to be even more specific, the small businesses of that industry. TRAXIT, is the result of that decision. With the help of her son TJ Weems, there is now a tool built for accountants, CPA’s and others of the industry. After one year of use, it was decided that other firms, accountants etc should have oppurtunity to use TRAXIT and hopefully find the same satisfaction that Aurelia Weems experienced in her firm. Sign up for a free demo today to see what TRAXIT can do for you and your team!</p>
        </div>
    </div>
</template>

<script>
export default {
 name: 'Why'
}
</script>

<style>
.why {
    width: 100%;
    background: var(--white);
}

.why-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1120px;
    margin: 0 auto;
    text-align: center;
    padding: 0 35px;
}

.why-header {
    font-size: 3rem;
    margin: 10px auto;
    color: var(--main);
    margin-bottom: 0!important;
}

.why-statement {
    padding: 0 50px;
    margin-top: 0;
    margin-bottom: 30px;
}

@media screen and (max-width: 767px) {
    .why-statement {
        font-size: .8rem;
        margin-top: 0;
    }
}
</style>
