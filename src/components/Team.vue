<template>
    <div class="team">
        <div class="team-content">
            <h2 class="team-header">The Team</h2>
            <div class="team-members">
                <div class="member">
                    <div class="team-img"></div>
                    <h4>Aurelia Weems</h4>
                </div>
                <div class="member">
                    <div class="team-img"></div>
                    <h4>TJ Weems</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Team'
}
</script>

<style>
.team {
    background: var(--lightgray);
    width: 100%;
}

.team-content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.team-header {
    font-size: 3rem;
    margin: 10px auto;
    color: var(--main);
}

.team-members {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.member {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--darkgray);
}

.team-img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: white;
}

@media screen and (max-width: 450px) {
    .team-members {
        flex-direction: column;
        align-items: center;
    }
}
</style>
