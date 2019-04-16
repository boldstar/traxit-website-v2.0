<template>
    <section class="features">
        <div class="features-content">
            <h2 class="features-header">Features</h2>
            <div class="feature-layout">
                <Feature :title="'Dashboard'" :text="'Giving a visual representation of the data you have flowing through your firm or business is great for quick decision making and a high level overview of what is happening'" />
                <Dashboard class="svg" />
            </div>
            <div class="feature-layout">
                <Workflow class="svg" />
                <Feature :title="'Workflows'" :text="'The backbone of this tool is workflows. They are meant to process and track the status of engagements. Essentially they can be used for anything that requires steps to complete but for a CPA firm this might be tax returns, or bookkeeping'" />
            </div>
            <div class="feature-layout">
                <Feature :title="'Engagements'" :text="'Engagements are what is being processed. For instance if you do a 1040 tax return, that would be considered an engagement. Consider it to be the connection between you and your clients. Each engagement will also contains specific details and questions that can be viewed at anytime.'" />
                <Folder class="svg" />
            </div>
            <div class="feature-layout">
                <Tasks  class="svg" />
                <Feature :title="'Tasks'" :text="'This is great to keep everyone informed on what is needed to be done. And more specifically what each team member has assigned. Each team member will have there own tasks. Each task is related to the processing of an engagement.'" />
            </div>
            <div class="feature-layout">
                <Feature :title="'Manage'" :text="'We wanted this took to be flexible so you have the ability to manage your own workflows, team members, and reports all from the admin dashboard. Only abled to be view by admins, this will be only accessed to those you choose to allow.'" />
                <Manage class="svg" />
            </div>
            <div class="feature-layout">
                <Reports class="svg" />
                <Feature :title="'Reports'" :text="'The ability to run reports is another great tool for making decisions. One example would be to know the amount of a certain tax returns were processed in the year 2018'" />
            </div>
        </div>
    </section>
</template>

<script>
import Feature from '@/components/Feature.vue'
import Dashboard from '~/assets/svg/dashboard.svg'
import Folder from '~/assets/svg/folder.svg'
import Workflow from '~/assets/svg/workflow.svg'
import Tasks from '~/assets/svg/tasks.svg'
import Reports from '~/assets/svg/reports.svg'
import Manage from '~/assets/svg/manage.svg'

export default {
    name: 'Features',
    components: {
        Feature,
        Dashboard,
        Folder,
        Workflow,
        Tasks,
        Reports,
        Manage
    },
}
</script>

<style>
    .features {
        background-color: var(--lightgray);
        width: 100%;
        position: absolute;
        left: 0;
    }

    .features-content {
        display: flex;
        flex-direction: column;
        max-width: 1120px;
        margin: 0 auto;
    }

    .features-header {
        font-size: 3rem;
        color: var(--main);
        margin: 10px auto;
    }

    .feature-layout {
        display: flex;
        justify-content: space-around;
        margin: 20px auto;
        width: 100%;
        padding: 20px;
    }

    @media screen and (max-width: 1232px) {
        .feature-layout {
            padding: 0;
        }
    }

    @media screen and (max-width: 800px) {

        .features-content {
            padding: 20px;
            margin: 0;
            align-items: center;
        }

        .feature-layout {
            flex-direction: column;
            align-items: center;
            background-color: var(--white);
            padding: 10px;
            margin: 20px 0;
            border-radius: 5px;
            box-shadow: 0 0 5px 0 rgba(0,0,0,.25);
        }

        .feature-layout:nth-of-type(odd) {
            flex-direction: column-reverse;
        }

        .feature-header {
            margin-top: 10px;
        }

        .svg {
            max-width: 350px;
            height: auto;
        }
    }
</style>
