
const dadosVideos = {
    "videos": [
        {
            "id": 1,
            "titulo": "Pinheiros no Alasca: Uma Jornada Gelada",
            "canal": "Planeta Selvagem",
            "visualizacoes": "1.2 mi de visualizações",
            "postadoHa": "há 2 semanas",
            "thumbnail": "https://picsum.photos/id/10/400/225",
            "banner": "https://picsum.photos/id/10/2000/400",
            "videoUrl": "https://www.youtube.com/embed/lazGUvZEEYs", 
            "likes": "98 mil",
            "descricao": "Explore as vastas e silenciosas florestas de pinheiros do Alasca. Neste documentário, seguimos a vida selvagem que depende dessas árvores milenares para sobreviver aos invernos rigorosos. Uma cinematografia de tirar o fôlego e uma história de resiliência.",
            "comentarios": [
                { "autor": "Aventureiro Nato", "texto": "Que imagens incríveis! Me senti no Alasca." },
                { "autor": "Biologia Total", "texto": "Excelente documentário, muito informativo." }
            ]
        },
        {
            "id": 2,
            "titulo": "Técnica Pomodoro: Foco Máximo nos Estudos",
            "canal": "Mente Brilhante",
            "visualizacoes": "890 mil visualizações",
            "postadoHa": "há 1 mês",
            "thumbnail": "https://picsum.photos/id/20/400/225",
            "banner": "https://picsum.photos/id/20/2000/400",
            "videoUrl": "https://www.youtube.com/embed/mNBmG24djoY",
            "likes": "45 mil",
            "descricao": "Dificuldade para se concentrar? A Técnica Pomodoro pode ser a solução. Aprenda a usar este método simples de gerenciamento de tempo para dividir suas tarefas em blocos de foco total, aumentando sua produtividade e diminuindo o cansaço mental.",
            "comentarios": [
                { "autor": "Concurseiro_24h", "texto": "Salvou minha rotina de estudos! Obrigado!" },
                { "autor": "Ana Clara", "texto": "Finalmente consegui terminar meu TCC com essa técnica." }
            ]
        },
        {
            "id": 3,
            "titulo": "O Segredo do Café Cubano Perfeito",
            "canal": "Mestre Cafeinado",
            "visualizacoes": "500 mil visualizações",
            "postadoHa": "há 3 dias",
            "thumbnail": "https://picsum.photos/id/30/400/225",
            "banner": "https://picsum.photos/id/30/2000/400",
            "videoUrl": "https://www.youtube.com/embed/v1fIK00fiDM",
            "likes": "32 mil",
            "descricao": "Descubra os segredos por trás de um autêntico e delicioso café cubano. Desde a escolha dos grãos até a técnica da 'espumita', vamos te guiar passo a passo para você replicar essa maravilha em casa e impressionar a todos.",
            "comentarios": [
                { "autor": "Carlos", "texto": "Fiz em casa e ficou sensacional!" }
            ]
        },
        {
            "id": 4,
            "titulo": "Relaxando na Praia: Som das Ondas",
            "canal": "Natureza Pura",
            "visualizacoes": "2.5 mi de visualizações",
            "postadoHa": "há 1 ano",
            "thumbnail": "https://picsum.photos/id/50/400/225",
            "banner": "https://picsum.photos/id/50/2000/400",
            "videoUrl": "https://www.youtube.com/embed/3xOvIm5EqCY", 
            "likes": "150 mil",
            "descricao": "Deixe o estresse para trás com 1 hora do som relaxante das ondas do mar quebrando na areia. Perfeito para meditar, dormir, estudar ou simplesmente para criar um ambiente de paz e tranquilidade.",
            "comentarios": [
                { "autor": "Julia Medeiros", "texto": "Uso toda noite para dormir, é mágico." },
                { "autor": "Pedro S.", "texto": "Me ajuda a focar no trabalho." }
            ]
        },
        {
            "id": 5,
            "titulo": "Show Acústico: Sucessos do Rock Nacional",
            "canal": "Estúdio Palco Livre",
            "visualizacoes": "780 mil visualizações",
            "postadoHa": "há 5 dias",
            "thumbnail": "https://picsum.photos/id/60/400/225",
            "banner": "https://picsum.photos/id/60/2000/400",
            "videoUrl": "https://www.youtube.com/embed/ExEbSN0lUgA",
            "likes": "65 mil",
            "descricao": "Uma apresentação intimista com os maiores sucessos do rock nacional em formato acústico. Uma viagem nostálgica e emocionante pelas canções que marcaram gerações.",
            "comentarios": [
                { "autor": "Fã de Rock", "texto": "Arrepiado! Que performance incrível!" }
            ]
        }
    ]
};

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function renderizarPaginaIndex() {
    const bannerContainer = document.getElementById('bannerCarouselInner');
    const gradeVideosContainer = document.getElementById('grade-videos');

    if (bannerContainer && gradeVideosContainer) {
        bannerContainer.innerHTML = '';
        gradeVideosContainer.innerHTML = '';

        dadosVideos.videos.slice(0, 3).forEach((video, index) => {
            const bannerItem = `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <a href="detalhe.html?id=${video.id}">
                        <img src="${video.banner}" class="d-block w-100" alt="Banner para ${video.titulo}">
                    </a>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${video.titulo}</h5>
                        <p>${video.canal}</p>
                    </div>
                </div>
            `;
            bannerContainer.innerHTML += bannerItem;
        });

        dadosVideos.videos.forEach(video => {
            const videoCard = `
                <div class="col">
                    <article class="card-video h-100">
                        <a href="detalhe.html?id=${video.id}">
                            <img src="${video.thumbnail}" alt="Miniatura do vídeo ${video.titulo}" class="miniatura-video">
                            <div class="informacoes-video">
                                <h3 class="titulo-video">${video.titulo}</h3>
                                <p class="nome-canal">${video.canal}</p>
                                <div class="metadados-video">
                                    <span class="visualizacoes-video">${video.visualizacoes}</span>
                                    <span class="tempo-video">${video.postadoHa}</span>
                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            `;
            gradeVideosContainer.innerHTML += videoCard;
        });
    }
}

function renderizarPaginaDetalhe() {
    const videoId = getUrlParameter('id');
    const video = dadosVideos.videos.find(v => v.id == videoId);

    const container = document.getElementById('detalhe-container');

    if (video) {
        document.title = video.titulo;

        let comentariosHtml = '';
        video.comentarios.forEach(comentario => {
            comentariosHtml += `
                <div class="comentario">
                    <strong class="comentario-autor">${comentario.autor}</strong>
                    <p class="comentario-texto">${comentario.texto}</p>
                </div>
            `;
        });

        container.innerHTML = `
            <!-- 1. Player de Vídeo -->
            <section class="video-player-section mb-4">
                <div class="ratio ratio-16x9">
                    <iframe src="${video.videoUrl}" title="${video.titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </section>

            <!-- 2. Título e Informações -->
            <section class="video-info-section">
                <h1 class="titulo-detalhe">${video.titulo}</h1>
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                    <div class="info-canal my-2">
                        <strong>Canal:</strong> ${video.canal} <br>
                        <span>${video.visualizacoes} • ${video.postadoHa}</span>
                    </div>
                    <div class="info-likes my-2">
                        <i class="bi bi-hand-thumbs-up-fill"></i> ${video.likes}
                    </div>
                </div>
            </section>

            <!-- 3. Descrição -->
            <section class="video-descricao-section my-4">
                <h3>Descrição</h3>
                <p>${video.descricao}</p>
            </section>

            <!-- 4. Comentários -->
            <section class="video-comentarios-section">
                <h3>Comentários</h3>
                ${comentariosHtml}
            </section>
        `;
    } else {
        container.innerHTML = `<h1 class="text-center text-danger">Vídeo não encontrado!</h1>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('detalhe.html')) {
        renderizarPaginaDetalhe();
    } else {
        renderizarPaginaIndex();
    }
});