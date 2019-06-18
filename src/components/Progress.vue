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
}

.step:after {
    content: "";
    width: 0;
    height: 10px;
    background: var(--main);
    display: block;
    position: absolute;
    top: 20px;
    z-index: -1;
    transition: width 1s ease-out;
}

.step:before {
    content: "";
    width: 300px;
    height: 10px;
    background: var(--darkgray);
    display: block;
    position: absolute;
    top: 20px;
    z-index: -2;
}

.step:last-of-type:after {
    display: none;
}

.step:last-of-type:before {
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
    width: 300px;
}

.step-complete {
    background: var(--main);
}

@media screen and (max-width: 650px) {
    .progress {
        width: 90%;
    }

    .step:before {
        width: 275px;
    }

    .step-complete:after {
        background: var(--main);
        width: 275px;
    }
}

@media screen and (max-width: 562px) {
    .step:before {
        width: 245px;
    }

    .step-complete:after {
        background: var(--main);
        width: 245px;
    }
}

@media screen and (max-width: 493px) {
    .progress {
        margin: 10px auto;
    }

    .step:before {
        width: 200px;
    }

    .step-complete:after {
        background: var(--main);
        width: 200px;
    }
}

@media screen and (max-width: 394px) {
    .step:before {
        width: 160px;
    }

    .step-complete:after {
        background: var(--main);
        width: 160px;
    }
}

</style>
