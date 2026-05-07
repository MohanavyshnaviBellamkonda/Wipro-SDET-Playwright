/*Abstraction:Abstraction means hiding internal details and showing only what is necessary
   
   Usage:
   Hide complexity
   Improve security
   Make code easy to use
   Reduce confusion

   Example: 
   class CoffeMachine 
   {
    #waterTemperature = 90;
 
    #boilWater() 
    {
        return Boiling water to ${this.#waterTemperature} degrees.;
    }
 
    #grindBeans() 
    {
        return "Grinding beans.";
    }
 
    brew() {
        const boilMessage = this.#boilWater();
        const grindMessage = this.#grindBeans();
        return ${boilMessage} ${grindMessage} Brewing coffee.;
    }
}
 
const myCoffeMachine = new CoffeMachine();
console.log(myCoffeMachine.brew());

2)

class WashingMachine 
{

    #fillWater() 
    {
        return "Filling water.";
    }

    #addSoap() 
    {
        return "Adding soap.";
    }

    #washClothes() 
    {
        return "Washing clothes.";
    }

    start() 
    {
        const step1 = this.#fillWater();
        const step2 = this.#addSoap();
        const step3 = this.#washClothes();

        return `${step1} ${step2} ${step3}`;
    }
}

const machine = new WashingMachine();

console.log(machine.start());

3)
class MobilePhone 
{

    #connectToTower() {
        return "Connecting to network.";
    }

    #checkSIM() {
        return "Checking SIM card.";
    }

    call() {
        const network = this.#connectToTower();
        const sim = this.#checkSIM();

        return `${network} ${sim} Calling person...`;
    }
}

const phone = new MobilePhone();

console.log(phone.call());

