class pom{

    constructor(page){
        this.page=page;
        this.username=page.locator("//input[@id='email']");
        this.password=page.locator("//textarea[@id='textarea']");
        this.male=page.locator("//input[@id='male']");
        this.sunday=page.locator("//input[@id='sunday']");
        this.wednesday=page.locator("//input[@id='wednesday']");

}

    async loginapp(umail,textarea){
        await this.username.fill(umail);
        await this.password.fill(textarea);
        await this.male.check();
        await this.sunday.check();
        await this.wednesday.check();
    }
}

export default pom;