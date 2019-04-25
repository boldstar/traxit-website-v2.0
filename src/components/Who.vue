<template>
    <section class="who">
        <div class="who-content">
            <h2 class="who-header">Who Is <strong class="who-traxit">TRAXIT</strong> For</h2>
                <ClientOnly>
                    <vue-typer
                    :text="text"
                    :repeat='Infinity'
                    :shuffle='false'
                    initial-action='typing'
                    :pre-type-delay='70'
                    :type-delay='70'
                    :pre-erase-delay='2000'
                    :erase-delay='70'
                    erase-style='backspace'
                    :erase-on-complete='false'
                    caret-animation='blink'
                    class="who-typer"
                    ></vue-typer>
                </ClientOnly>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Who',
    components: {
        VueTyper: () => 
        import ('vue-typer')
        .then( m => m.VueTyper)
        .catch()
    },
    data() {
        return {
            text: ["CPA's", "EA's", "Tax Preparers", "Bookkeepers", "Accountants"]
        }
    }
}
</script>

<style>

    .who {
        width: 100%;
        position: relative;
        background: var(--lightgray);
        min-height: 100px;
        padding: 25px 0;
    }

    .who-content {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .who-header {
        font-size: 3rem;
        color: var(--darkgray);
        margin: 10px;
    }

    .who-typer {
        font-size: 3rem!important;
        color: var(--main)!important;
    }

    .who-traxit {
        color: var(--main);
    }

    @media screen and (max-width: 767px) {
        .who-header {
            font-size: 2rem;
            margin: 0;
        }

        .who-typer {
            font-size: 2rem!important;
        }
    }

</style>
