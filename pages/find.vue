<template>
    <div class="contact-info">
        <div class="title-container">
            <h1 class="text-4xl font-bold text-center">
                Where to <b style="color:#008b8b">find</b> me:
            </h1>
        </div>
        <div class="contact-item">
            <a href="mailto:loremolinari1@gmail.com" class="contact-link">
                <MailIcon name="mail" class="contact-icon" />
                <span class="contact-text">{{ email }}</span>
            </a>
        </div>
        <div class="contact-item">
            <a href="tel:+393518002677" class="contact-link">
                <PhoneIcon name="phone" class="contact-icon" />
                <span class="contact-text">{{ phone }}</span>
            </a>
        </div>
        <div class="contact-item">
            <a :href="'https://www.youtube.com/channel/' + youtube" class="contact-link">
                <YoutubeIcon name="youtube" class="contact-icon" />
                <span class="contact-text">Lorenzo Molinari</span>
            </a>
        </div>
        <div class="contact-item">
            <a :href="'https://www.instagram.com/' + instagram" class="contact-link">
                <InstagramIcon name="instagram" class="contact-icon" />
                <span class="contact-text">{{ instagram }}</span>
            </a>
        </div>
        <div class="contact-item">
            <a :href="'https://telegram.me/' + telegram" class="contact-link">
                <SendIcon name="telegram" class="contact-icon" />
                <span class="contact-text">{{ telegram }}</span>
            </a>
        </div>
        <div class="contact-item">
            <a :href="'https://wa.me/' + whatsapp" class="contact-link">
                <MessageCircleIcon name="whatsapp" class="contact-icon" />
                <span class="contact-text">{{ whatsapp }}</span>
            </a>
        </div>
    </div>
</template>
    
<script>
import { YoutubeIcon, PhoneIcon, InstagramIcon, SendIcon, MessageCircleIcon, MailIcon } from 'vue-feather-icons'

export default {
    name: 'ContactInfo',
    components: {
        YoutubeIcon,
        PhoneIcon,
        InstagramIcon,
        SendIcon,
        MessageCircleIcon,
        MailIcon
    },
    data() {
        return {
            email: 'loremolinari1@gmail.com',
            phone: '+393518002677',
            youtube: 'UCmEexGwb_itrXBEtsVBUqXA',
            instagram: 'loremolinari1',
            telegram: 'Lore_Molinari',
            whatsapp: '+393518002677',
        };
    },
};
</script>
    
<style scoped>
.contact-info {
    display: flex;
    flex-direction: column;
    height: 70vh;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}

.title-container {
  margin-bottom: 40px;
}

.contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.contact-icon {
    margin-right: 10px;
}

.contact-link {
    color: #ebebeb;
    text-decoration: none;
    font-size: 18px;
    display: flex;
    align-items: center;
}

.contact-text {
    margin-left: 5px;
}

.contact-link:hover,
.contact-link:focus {
    color: #008b8b;
    text-decoration: underline;
}

.contact-link:hover .contact-icon {
    transform: rotate(335deg);
    transition: transform 0.5s ease;
}
</style>
  