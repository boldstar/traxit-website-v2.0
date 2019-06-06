<template>
    <div class="progress">
        <div class="step" :class="{'step-complete': stepOne}">
            <span>1</span>
        </div>
        <div class="step" :class="{'step-complete': stepTwo}">
            <span>2</span>
        </div>
        <div class="step" :class="{'step-complete': stepThree}">
            <span>3</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Progress',
    props: ['stepOne', 'stepTwo', 'stepThree']
}
</script>

<style>

.progress {
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    width: 100%;
    max-width: 600px;
}

.step {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: var(--darkgray);
    color: white;
    text-align: center;
    position: relative;
    z-index: 1;
    transition: background .3s ease-out;
}

.step:after {
    content: "";
    width: 300px;
    height: 10px;
    background: var(--darkgray);
    display: block;
    position: relative;
    top: 20px;
    z-index: 0;
    transition: background .3s ease-out;
}

.step:last-of-type:after {
    display: none;
}

.step span {
    position: absolute;
    top: 10px;
    left: 19px;
    font-size: 1.3rem;
    font-weight: bold;
    z-index: 2;
}

.step-complete:after {
    background: var(--main);
}

.step-complete {
    background: var(--main);
}

</style>
