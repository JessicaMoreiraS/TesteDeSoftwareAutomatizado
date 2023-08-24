//importar modulos
//Builder - BY -Key (Builder cria o objeto, By busca o elemento e Key seria o teclado que na verdade será o selenium)

require('dotenv/config');

const {Builder, By, Key} = require('selenium-webdriver');

//Importa o objeto chrome do modulo selenium-webdriver/chrome
const chrome = require('selenium-webdriver/chrome');

//Importa o modulo chromedriver
const chromedriver = require('chromedriver');

//Criar um novo objeto
const service = ()=> chromedriver.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

//Definir a função
async function run(){
    //Criar um novo objeto webdriver
    let driver = await new Builder().forBrowser('chrome').build();

    //Abre a página
    await driver.get('https://github.com/login');

    const email = await driver.findElement(By.name('login'));
    await email.sendKeys(process.env.EMAIL); 
    await email.sendKeys(Key.TAB);
    
    const senha = await driver.findElement(By.name("password"));
    await senha.sendKeys(process.env.SENHA); 

    //Pressionar o enter
    await senha.sendKeys(Key.ENTER);
}

run();

