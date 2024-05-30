const biblioteca = {
    livros: [{
        titulo: 'O senhor dos Aneis',
        autor: 'J.R.R. Tolkien',
        ano: 1954,
        genero: 'Fantasia',
        disponivel: true,
    },{
        titulo: 'Shinoro adventures',
        autor: 'Maiara e Julio',
        ano: 2016,
        genero: 'Familiar',
        disponivel: true,
    },
    {
        titulo: 'A volta de quem não foi',
        autor: 'Quem nunca existiu',
        ano: 1700,
        genero: 'Ficção',
        disponivel: true,
    }],
    adicionarLivro: function(titulo, autor, ano, genero){
        for(let i = 0; i < this.livros.length; i++){
            if(this.livros[i].titulo === titulo){
               return console.log('O livro já está cadastrado em nosso sistema.');
            } 
        }
        this.livros.push({
            titulo: titulo,
            autor: autor,
            ano: ano,
            genero: genero,
            disponivel: true,
        })
        console.log('Livro cadastrado com sucesso.');
    },
    emprestarLivro: function(titulo){
        for(let i = 0; i < this.livros.length; i++){
            if(this.livros[i].titulo === titulo){
                if (this.livros[i].disponivel){
                    this.livros[i].disponivel = false;
                    return console.log('Livro emprestado com sucesso.');
                }else{
                    return console.log('O livro não está disponível para empréstimo.');
                }
            }
        }
            return console.log('Livro não encontrado.');
    },
    devolverLivro: function(titulo){
        for(let i = 0; i < this.livros.length; i++){
            if(this.livros[i].titulo === titulo){
                if (this.livros[i].disponivel === false){
                    this.livros[i].disponivel = true;
                    return console.log('Livro devolvido com sucesso.');
                }else{
                    return console.log('O livro que você está tentando devolver ainda não foi emprestado');
                }
            }
        }
            return console.log('Livro não encontrado.');
    },
    listarLivros: function(){
        for(let i = 0; i < this.livros.length; i++){
            console.log(`Título: ${this.livros[i].titulo}`);
            console.log(`Autor: ${this.livros[i].autor}`)
            console.log(`Ano: ${this.livros[i].ano}`)
            console.log(`Genereo: ${this.livros[i].genero}`)
            let estaDisponivel = this.livros[i].disponivel ? 'Sim': 'Não';
            console.log(`Disponivel para empréstimo: ${estaDisponivel}`);
        }
    }
}
