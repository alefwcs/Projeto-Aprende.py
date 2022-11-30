//selecionando todos os elementos necessários
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// se o botão de iniciar revisão for clicado 
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //mostrar a caixa de informações
}

// se o botão de sair da revisão for clicado
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //esconder a caixa de informações
}

// se o botão de continuar para de revisão for clicado 
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //esconder a caixa de informações
    quiz_box.classList.add("activeQuiz"); //mostrar a caixa do questionário 
    showQuetions(0); //chamando a função de mostrar as questoes 
    queCounter(1); //passando 1 parametro para uma função
    startTimer(15); //chamando a função de iniciar o timer
    startTimerLine(0); //chamando a função 
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// se o botaão de refazer o teste for selecionado 
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //mostrar a caixa do questionario 
    result_box.classList.remove("activeResult"); //esconder a caixa de resultados 
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //chamando uma função 
    queCounter(que_numb); //passando que_numb como uma valor para a função queCounter
    clearInterval(counter); //limpar counter
    clearInterval(counterLine); //limpar counterLine
    startTimer(timeValue); //chamando uma função
    startTimerLine(widthValue); //chamando uma função
    timeText.textContent = "Tempo restante"; //mudar o texto 
    next_btn.classList.remove("show"); //esconder o botão de proxima 
}

// se o botão de sair do teste for clicado
quit_quiz.onclick = ()=>{
    window.location.reload(); //regarregar a janela
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// se o botao de proxima questão for apertado 
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //se o numero da questão for menor que o numero total de questoes 
        que_count++; //aumentar o valor de que_count 
        que_numb++; //aumentar o valor de que_numb 
        showQuetions(que_count); //chamando uma função
        queCounter(que_numb); //passando que_numb como uma valor para a função queCounter 
        clearInterval(counter); //limpar counter
        clearInterval(counterLine); //limpar counterLine
        startTimer(timeValue); //chamando uma função
        startTimerLine(widthValue); //chamando uma função
        timeText.textContent = "Time Left"; //mudar timeText para Time Left
        next_btn.classList.remove("show"); //esconder o botao de proxima
    }else{
        clearInterval(counter); //limpar counter
        clearInterval(counterLine); //limpar counterLine
        showResult(); //chamando uma função
    }
}

// pegando as questoes e as opções da array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //criando novas tags de span e div para questoes e opções e passando o valor usando index da array 
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adicionando uma nova span dentro de que_tag
    option_list.innerHTML = option_tag; //adicionando um novo div dentro de option_tag
    
    const option = option_list.querySelectorAll(".option");

    // colocado o onclick para todas as opçoes disponiveis 
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// criando uma nova tag div para os icons 
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//se o usuario clicar em uma opção 
function optionSelected(answer){
    clearInterval(counter); //limpar contador 
    clearInterval(counterLine); //limpar linha do contador  
    let userAns = answer.textContent; //pegando a opção que o usuario clicou 
    let correcAns = questions[que_count].answer; //pegando a opção correta da array 
    const allOptions = option_list.children.length; //pegando todas as opções
    
    if(userAns == correcAns){ //se o usuario selecionou a opção correta igual a da array 
        userScore += 1; //atualizando os pontos com 1
        answer.classList.add("correct"); //adicionando a cor verde para a opção correta
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adicionando o icon na resposta correta 
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adicionar a cor vermelha para a opção selecionada 
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adicionando o x para a opção
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //se há um match com a opção da array
                option_list.children[i].setAttribute("class", "option correct"); //adicionando a cor verde para opção do match
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adicionando o icon na resposta correta 
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //assimq ue o usuario selecionar um aopção, invalidar as outras (nao da pra clicar) 
    }
    next_btn.classList.add("show"); //mostrar o botao de proximo se uma opção for selecionada 
}

function showResult(){
    info_box.classList.remove("activeInfo"); //esconder caixa de informações
    quiz_box.classList.remove("activeQuiz"); //esconder caixa de questionario 
    result_box.classList.add("activeResult"); //mostrar a caixa de pontos
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // se o usuario acertou mais que 3
        //criando uma nova span e adicionando o numero de acertos e o numero total 
        let scoreTag = '<span>Parabéns!, você conseguiu <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adicionando a nova span para score_Text
    }
    else if(userScore > 1){ // se o usuario acertou mais que 1
        let scoreTag = '<span>Legal, você conseguiu <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // s eo usuario acertou menos que 1 
        let scoreTag = '<span>Foi mal, você conseguiu só <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //mudando o valor de  timeCount com o valor do tempo 
        time--; //retirando o valor do tempo
        if(time < 9){ //se o tempo for menor que 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //adicionar um 0 antes do valor do tempo
        }
        if(time < 0){ //se o timer for menos que 0
            clearInterval(counter); //limpar contador
            timeText.textContent = "O tempo acabou"; //mudar a escrita do tempo (acabou o tempo)
            const allOptions = option_list.children.length; //pegando todos os itens de opções 
            let correcAns = questions[que_count].answer; //pegando a resposta correta da array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //se ha uma opção que da match com a array
                    option_list.children[i].setAttribute("class", "resposta certa"); //adicionado a cor verde para a opção do match
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adicionando o icon para a opção do match
                    console.log("O tempo acabou: Resposta correta selecionada.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //assim que o usuario selecionar uma opção, desabilitar as outras
            }
            next_btn.classList.add("show"); //mostrar a opção de proxima se o usuario selecionou alguma opção
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //atualizando o valor do tempo com 1 
        time_line.style.width = time + "px"; //aumentando o tamanho de time_line with px pelo valor do tempo
        if(time > 549){ //se o valor do tempo for maior que 549
            clearInterval(counterLine); //limpar counterLine
        }
    }
}

function queCounter(index){
    //criando uma nova tag span e passnado o numero da questao e o total de questoes 
    let totalQueCounTag = '<span><p>'+ index +'</p> de <p>'+ questions.length +'</p> Questões</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adicionado new tag inside bottom_ques_counter
}