<template>
    <section class="section">
        <div class="container grid-body">
            <div class="span__full">
                <h1 class="title text-centered">New project</h1>
            </div>
            <div class="span__8_l offset__2_l">
                <div class="form">
                    <div class="form__input-group">
                        <label class="label" for="name">Company name</label>
                        <div class="input_wrapper">
                            <input
                                class="input"
                                v-bind:class="{ error: error.name }"
                                type="text"
                                data-validate="yes"
                                data-type="required"
                                name="name"
                                id="name"
                                v-model="project.name"
                                placeholder="Best company AsP"
                            />
                        </div>
                        <div class="error-popup" v-if="this.error.name">{{ this.error.name[0] }}</div>
                    </div>
                    <div class="form__input-group margin-top-xs">
                        <label class="label" for="description">Project description</label>
                        <div class="input_wrapper">
                            <textarea
                                class="input"
                                v-bind:class="{ error: error.description }"
                                rows="6"
                                name="description"
                                id="description"
                                v-model="project.description"
                                placeholder="Web application.."
                            ></textarea>
                        </div>
                        <div class="error-popup" v-if="this.error.description">{{ this.error.description[0] }}</div>
                    </div>
                    <div class="form__input-group margin-top-xs">
                        <label class="label" for="budget">Project budget</label>
                        <div class="input_wrapper">
                            <input
                                    class="input"
                                    v-bind:class="{ error: error.budget }"
                                    type="text"
                                    data-validate="yes"
                                    data-type="required"
                                    name="budget"
                                    id="budget"
                                    v-model="project.budget"
                                    placeholder="1.000.000.000kr"
                            />
                        </div>
                        <div class="error-popup" v-if="this.error.budget">{{ this.error.budget[0] }}</div>
                    </div>
                    <div class="form__input-group margin-top-xs">
                        <label class="label" for="timeframe">Project timeframe</label>
                        <div class="input_wrapper">
                            <input
                                    class="input"
                                    v-bind:class="{ error: error.timeframe }"
                                    type="text"
                                    data-validate="yes"
                                    data-type="required"
                                    name="timeframe"
                                    id="timeframe"
                                    v-model="project.timeframe"
                                    placeholder="5 months"
                            />
                        </div>
                        <div class="error-popup" v-if="this.error.timeframe">{{ this.error.timeframe[0] }}</div>
                    </div>
                    <div class="form__input-group margin-top-s">
                        <button
                                class="btn btn-block btn-prim"
                                @click="create">
                            Submit project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProjectService  from 'Services/projectService';
export default {
    data () {
        return {
            project: {
                name: null,
                description: null,
                budget: null,
                timeframe: null
            },
            error: {
                name: null,
                description: null,
                budget: null,
                timeframe: null
            }
        }
    },
    methods: {
        async create () {
            try {

                const response = await ProjectService.create(this.project);
                this.error = null
                console.log(response)

            } catch (error) {
                this.error = error.response.data.errors || error.message;
                console.log(this.error)
            }
        }
    }
}
</script>

<style scoped>
    .error {
        border-color: red;
    }

    .error-popup {
        margin-top: 8px;
        color: red;
    }

</style>