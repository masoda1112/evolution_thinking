class Idea {
    constructor(name, physicalVariables, conceptVariables, functions) {
        this.name = name;
        this.physicalVariables = physicalVariables;
        this.conceptVariables = conceptVariables;
        this.functions = functions;
        this.ideas = [];
    }

    buildIdea() {
        for (let i of this.physicalVariables) {
            this.ideas = this.ideas.concat(this.increase(i));
            this.ideas = this.ideas.concat(this.missing(i));
            this.ideas = this.ideas.concat(this.divide(i));
            this.ideas = this.ideas.concat(this.reverse(i));
        }

        for (let i of this.conceptVariables) {
            this.ideas = this.ideas.concat(this.transfer(i));
        }

        return this.ideas;
    }

    increase(physicalVar) {
        let ideas = [];
        ideas.push(`大量の${physicalVar}の${this.name}`);
        ideas.push(`少量の${physicalVar}の${this.name}`);
        return ideas;
    }

    missing(physicalVar) {
        let ideas = [];
        ideas.push(`無い${physicalVar}の${this.name}`);
        return ideas;
    }

    transfer(conceptVar) {
        let ideas = [];
        ideas.push(`では無い${conceptVar}の${this.name}`);
        return ideas;
    }

    divide(physicalVar) {
        let ideas = [];
        ideas.push(`${physicalVar}を分離する${this.name}`);
        return ideas;
    }

    reverse(physicalVar) {
        let ideas = [];
        ideas.push(`${physicalVar}が主役の${this.name}`);
        for (let i of this.functions) {
            ideas.push(`${physicalVar}${i}${this.name}`);
        }
        return ideas;
    }
}

let idea = new Idea('机', ['足', '台'], ['家具', 'インテリア'], ['に置く']);
let idea2 = new Idea('キャンプ場', ['野原', 'バーベキューセット', 'テント', 'トイレ'], ['アウトドア', '娯楽', '宿泊'], ['に泊まる', 'で食べる', 'で料理する']);

let ideas = idea.buildIdea();
let ideas2 = idea2.buildIdea();
let test = 'test'
console.log(ideas)



// 外部ファイルの値を使用できる
window.onload = function(){
    const testElement = document.getElementById('test');
    for(i in ideas2){
        testElement.innerHTML += `<li>${ideas2[i]}</li>`;
    }
}
