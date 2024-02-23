<template>
    <div class="vh-100">
        <header class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" @click="getBack">Back</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </header>

        <section id="hero" class="d-flex align-items-center vh-100">

            <div class="container-fluid p-5" data-aos="fade-up">
                <div class="row justify-content-center">
                    <div class="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-lg-1 d-flex flex-column justify-content-center">
                        <h1>{{ messageTitle }}</h1>
                        <p style="word-spacing: 8px;">
                            {{ secretMessage }}
                        </p>
                    </div>
                    <div class="col-xl-4 col-lg-6 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
                        <img src="/images/Love-story.svg" class="img-fluid animated" alt="">
                    </div>
                </div>
            </div>

        </section>
    </div>
    <router-view />
</template>
  
<script>
export default {
    data() {
        return {
            secretMessage: '',
            messageTitle: ''
        };
    },
    methods: {
        getBack() {
            this.$router.push('/selection');
        },
        messages() {
            var codes = this.$route.params.id;

            if (codes == '3a9bC7dE1fG2hI4jK6lM8nO0pQ2rT4vX6zY8aB0cD3eF5gH7iJ9kL1mN3') {
                this.messageTitle = 'I Love You';
                this.secretMessage = `Karon pa ko nakahimo ani sukad sukad nga nagkakita. 
                    Dili man ko perpekto nga pagka-uyab pero dili ko tantong amaw para magbinoang nimo.
                    Wa ra ko nag expect nga tanan nakong mga first time diha nako nabuhat nimo haahah pero I Love You.
                    Gibuhat ko ni dili tungod kay kinahanglan kung dili gusto ra nako
                    Maldita ka, gahi ug ulo gamay nalang kuwang iitsa na tika last nalang ka ba.
                    Maayo kaayo ka mo tambag pero kong tambagan ka mura ka ug bata nga gikuhaan ug
                    duwaan masuko`;
            } else if (codes == '5bC7dE9fG1hI3jK5lM7nO9pQ1rT3vX5zY7aB9cD1eF3gH5iJ7kL9mN1o') {
                this.messageTitle = 'Come What May';
                this.secretMessage = `Bisag unsa'y mahitabo unta mo salig ka nako hahahah overthinker ka ug diko kapungog ana, una palang, sa tinood lang wakoy salig sa akong kaugalingon bisag gamay. seloso ko pero dili man ko init 
                    kaayo ug ulo bahin sa ingun ana, unta kong mag-away ta kay kahibalo man kong mahitabo jud na, IKAW PA. ug kahibalo ko nimo
                    makigbuwag jud ka ana, pero unta saligi ko sa mga temptation kay dili raman sad ko mo patol sa ingun ana. kay bisan unsa paman ang mahitabo
                    basta di lang ko mamatay neither ikaw, dili ko mo patol ug lain.`;
            } else if (codes == '7cD9eF1gH3iJ5kL7mN9oP1qR3sU5wX7yZ9aB1dE3fG5hI7jK9lM1nO3') {
                this.messageTitle = `I'm a slave`;
                this.secretMessage = `Ako ang tawng introvert (HSH Moments), pero sa akong pagkahilomon, kong naa ka nagbantay ko permi nimo.
                    sa posibling mahitabo nimo, sa mga nahitabo nimo. Wako nanginahanglan ug sohol ang gusto ra nako ako ra ka, ang gusto nako unsay ako imoha
                    ang akong gusto kong unsay gusto nimo akoa. Ganahan ko perming naa ko dool nimo human sa trabaho mo hug nimo, mo kiss ug mag ana ana HAHAHAHAH
                    bitaw tanan nakong gusto tanan nakong priority sa kinabuhi gusto ko nga naa ka sa dool, molampos man o matapos gusto kong naa ka hangtud sa punto nga
                    tanan nimong gusto kong makaya nako buhaton nako, kahibalo kong maikog ka mura sad ka ug naay ikog da, pero unta puhon kong walay maligsan nato sa ato nig graduate kita gihapon
                    nyate ra ug di labay jud tika ako jud mismo ang mo ligis nimo.
                    `;
            } else if (codes == '9dE1fG3hI5jK7lM9nO1pQ3rT5vX7zY9aB1cD3eF5gH7iJ9kL1mN3oP') {
                this.messageTitle = 'This I Promise You';
                this.secretMessage = `Una dili ko sociable nga pagkatao, ganahan ko maginusara pero dili sad pasabot ana dili ko ganahan wakoy kuyog
                    while ko maginusara maglisud sad ko ug maghunahuna ug bati bahin sa akong kaugalingon. Wala jud kaayo ko'y mahatag nimo nga expensive
                    pobre man jud ko wala ko'y makaya kaayong dali puro dugay puro plano bisan paman ug ni buhat ko permi jud pud ko dugay dili permi maigo sa oras nga dapat mahuman na
                    malisud pa ko labi na sa date maong ginagmay sa lang ta hahahah pasensya kong nakauyab ka ug pariha nako nga lalake pero bisan na ug mao rana akong makaya
                    dili man sad ko nimo maingun nga pariha ko sa ubang lalake sa party goir palang lisud na nimong makumpara sa ubang lalake puhon magpuyo nata sa kaugalingon natong balay
                    bisag dili lang dinagkuay ug makaginhawa ta ug tarung makakaon katulo makasuroysuroy ug unta kong maabot na nga panahon, naa paka nako.`;
            } else if (codes == '1eF3gH5iJ7kL9mN1oP3qR5sU7wX9yZ1aB3cD5eF7gH9iJ1kL3mN5') {
                this.messageTitle = 'Paint My Love';
                this.secretMessage = `Kong kanus a ko ni dark na ug humor dira ka ni abot, kong kanus a ko wala kaayo pakialam sa kalibutan dira ka naabot
                    kong kanus a para nako akong kaugalingon naa sa pinakadown naabot ka, ni abot mo dili para hatagan ko ug peace of mind kundi tagaan ug gubot 
                    sa akong hunahuna, kong kanus a okay ra nako mamatay ko naabot nako, ug nagpasalamat ko nga nahitabo na kay kong di wala ko'y client, diko kamao mo code
                    dili nako mahibaw an kong unsay kaya nako, dili ko makahunahuna ug sa future nako maong bisag makalagot ka gamaya ka ipakita lang nimo imong kasapot nga nawng
                    malipay nako HAHAHAHAAH Paint My Love tungod kay ikaw ang naghatag nako ana. Maong salamat, By The Way bantayg gilibak ko ninyong mama atong niagto ug avon ah.
                `;
            } else if (codes == '3fG5hI7jK9lM1nO3pQ5rT7vX9zY1aB3dE5fG7hI9jK1lM3nO5pQ7') {
                this.messageTitle = 'A Little More';
                this.secretMessage = `Hi, Busy na lately, Wala nako'y oras kaayo ug ikaw sad wala na kaayo, tibook nato oras wala na ta nakasuway ug chat halos pag last pajud wala jud ka mo reply 
                hangtud sa nasuko nalang nako sadko pero kay ikaw mana syempre masuko sad ka oi ikaw pa higher pa man gani HAHAHAHA. Sunod pajud dili ko diri mangita sa lapu-lapu or cordova ug trabaho,
                kong maabot gani sa puntong agto ko sa cebu na mangita ug ikaw naa diri sa lapu-lapu gamay nalang jud kaayo ta ug change nga magkita-kita pa not unless kong imo nakong mapailaila nila.
                nag imagine palang gani ko kong mapailaila ko nimo nila unsa kahay masulti nila haahah pero bisan na dili man sad sila akong pakaslan puhon ikaw man kana kong walay mausab pa nato.
                Unta kong maabot ang panahon nga dili nata permi magkita dili maabot sa puntong mo balik ko sa kong unsa ko pag sauna hahahah so bali nakasalalay nimo ang akong kabagohan balik hahahha
                lisud man pero permi gadagan ang oras, sa tinood mura ra siya'g taas orasa pero dili gamay ra mubo ra pila ka oras matingala nalang ta atong anak ni buhat nasad sa kong unsa man ang gipangbuhat nato
                hahahha pang igkon jud nako.`;
            }
        },
        reload() {
            setInterval(() => {
                this.$router.push('/selection');
            }, 180000);
        }
    },
    created() {
        this.messages();
        this.reload();
    },
};
</script>