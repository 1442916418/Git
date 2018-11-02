<template>
    <div class="menu-bar">
        <transition name="slide-up">
            <div class="menu-wrapper"
            v-show="ifTitleAndMenuShow">
                <div class="icon-wrapper">
                    <span class="icon-menu icon"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-progress icon"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-bright icon"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-a icon" @click="showSetting">A</span>
                </div>
            </div>
        </transition>
        <transition name="slide-up">
            <div class="setting-wrapper" v-show="ifSettingShow">
                <div class="setting-font-size">

                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data () {
        return {
            ifSettingShow: false
        }
    },
    methods: {
        showSetting() {
            this.ifSettingShow = true
        },
        hideSetting() {
            this.ifSettingShow = false
        }
    },
    props: {
        ifTitleAndMenuShow: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../assets/styles/global';
.menu-bar{
    .menu-wrapper{
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 100;
        display: flex;
        width: 100%;
        height: px2rem(48);
        background: white;
        box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
        .icon-wrapper{
            flex: 1;
            @include center;
            .icon-progress{
                font-size:  px2rem(28);
            }
            .icon-bright{
                font-size: px2rem(24);
            }
        }
    }
    .setting-wrapper{
        position: absolute;
        bottom: px2rem(48);
        left: 0;
        width: 100%;
        height: px2rem(60);
        background: white;
        box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
        .setting-font-size{

        }
    }
}

</style>
