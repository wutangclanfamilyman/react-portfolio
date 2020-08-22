import axios from 'axios';

export default class GetData {
    constructor() {
        this._apiBase = 'http://portfolio/wp-json/';
    }

    getResource = async (url) => {
        const request = await axios.get(`${this._apiBase}${url}`)
        if(request.status !== 200) {
            throw new Error(`Could not fetch ${url}, received ${request.status}`);
        }
        return await request.data;
    }

    getHomeTitle = async () => {
        const res = await this.getResource(`wp/v2/pages/5`);
        return this._transformTitle(res);
    }

    _transformTitle(title) {
        return {
            name: title.acf.name,
            position: title.acf.position
        }
    }

    getAboutInfo = async () => {
        const res = await this.getResource(`wp/v2/pages/26`);
        return this._transformAboutInfo(res);
    }

    _transformAboutInfo(about) {
        return {
            title: about.title.rendered,
            subheader: about.acf.subheader,
            text: about.acf.text,
            photo: about.acf.foto.url,
            resume: about.acf.rezyume
        }
    }

    getPortfolioItems = async () => {
        const res = await this.getResource(`wp/v2/portfolio`);
        return res.map(item => this._transformPotfolioItem(item));
    }

    _transformPotfolioItem(item) {
        return {
            id: item.id,
            title: item.title.rendered,
            done: item.acf.done,
            about: item.acf.about,
            link: item.acf.link,
            release: item.acf.release,
            image: item.acf.logo,
            desktop: item.acf.screenshot_dekstop,
            tablet: item.acf.screenshot_tablet,
            mobile: item.acf.screenshot_mobile,
            bgColor: item.acf.background,
            textColor: item.acf.font,
            technologies: item.acf.technologies
        }
        
    }

    getPortfolioItem = async (id) => {
        const item = await this.getResource(`wp/v2/portfolio/${id}/`);
        return this._transformPotfolioItem(item);
    }

    getSocialItems = async () => {
        const res = await this.getResource(`wp/v2/contacts`);
        return res.map(item => this._transformSocialItems(item))
    }

    _transformSocialItems(item) {
        return {
            id: item.id,
            title: item.acf.title,
            icon: item.acf.icon,
            link: item.acf.link
        }
    }

    getEducationList = async () => {
        const res = await this.getResource(`wp/v2/posts?categories=16`);
        return res.map(item => this._transformEducationItem(item))
    }

    _transformEducationItem(item) {
        return {
            id: item.id,
            specialty: item.acf.specialty,
            institution: item.acf.institution,
            period: item.acf.period,
            degree: item.acf.degree
        }
    }

    getSkillsList = async () => {
        const res = await this.getResource(`wp/v2/posts?categories=22&per_page=16&order=asc`);
        return res.map(item => this._transformSkillsItem(item))
    }

    _transformSkillsItem(item) {
        return {
            id: item.id,
            title: item.acf.name,
            icon: item.acf.icon
        }
    }

    getMoreList = async () => {
        const res = await this.getResource(`wp/v2/posts?categories=28`);
        return res.map(item => this._transformMoreItem(item))
    }

    _transformMoreItem(item) {
        return {
            piblicationFirst: item.acf.publication,
            piblicationSecond: item.acf.publication_2
        }
    }

    getContacts = async () => {
        const res = await this.getResource(`wp/v2/pages/42`);
        return this._transformContacts(res);
    }

    _transformContacts(item) {
        return {
            title: item.title.rendered,
            text: item.content.rendered,
            email: item.acf.email,
            emailIcon: item.acf.email_icon, 
            social: [
                {
                    link: item.acf.facebook,
                    icon: item.acf.facebook_icon 
                },
                {
                    link: item.acf.linkedin,
                    icon: item.acf.linkedin_icon 
                },
                {
                    link: item.acf.instagram,
                    icon: item.acf.instagram_icon 
                },
                {
                    link: item.acf.skype,
                    icon: item.acf.skype_icon 
                },
                {
                    link: item.acf.telegram,
                    icon: item.acf.telegram_icon 
                },
                {
                    link: item.acf.phone,
                    icon: item.acf.phone_icon 
                }
            ],
            address: {
                link: item.acf.address,
                icon: item.acf.address_icon
            }
        }
    }

    getAboutSocial = async () => {
        const res = await this.getResource(`wp/v2/pages/42`);
        return this._transformatAboutSocial(res);
    }

    _transformatAboutSocial(item) {
        return [
            {
                title: 'facebook',
                link: item.acf.facebook,
                icon: item.acf.facebook_icon 
            },
            {
                title: 'github',
                link: item.acf.github,
                icon: item.acf.github_icon 
            },
            {
                title: 'instagram',
                link: item.acf.instagram,
                icon: item.acf.instagram_icon 
            },
            {
                title: 'telegram',
                link: item.acf.telegram,
                icon: item.acf.telegram_icon 
            }
        ]
    }

    getNavSocial = async () => {
        const res = await this.getResource(`wp/v2/pages/42`);
        return this._transformatNavSocial(res);
    }

    _transformatNavSocial(item) {
        return [
            {
                title: 'email',
                link: item.acf.email,
                icon: item.acf.email_icon 
            },
            {
                title: 'phone',
                link: item.acf.phone,
                icon: item.acf.phone_icon 
            },
            {
                title: 'facebook',
                link: item.acf.facebook,
                icon: item.acf.facebook_icon 
            },
            {
                title: 'linkedin',
                link: item.acf.linkedin,
                icon: item.acf.linkedin_icon 
            }
        ]
    }
}