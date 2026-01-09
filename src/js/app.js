// Dados das fotos - fotos coletadas 
const photos = [
    {
        id: 1,
        title: "Montanhas ao Amanhecer",
        filename: "montanha.jpg",
        tags: ["natureza", "montanha", "amanhecer", "paisagem"]
    },
    {
        id: 2,
        title: "Praia Tropical",
        filename: "praia.jpg", 
        tags: ["praia", "mar", "tropical", "areia"]
    },
    {
        id: 3,
        title: "Cidade à Noite",
        filename: "cidade-noturna.jpg",
        tags: ["cidade", "noite", "luzes", "urbano"]
    },
    {
        id: 4,
        title: "Xícara de Café",
        filename: "cafe.jpg",
        tags: ["café", "bebida", "quente", "xícara"]
    },
    {
        id: 5,
        title: "Computador Moderno",
        filename: "computador.jpg",
        tags: ["tecnologia", "computador", "trabalho", "escritório"]
    },
    {
        id: 6,
        title: "Cachorro Descansando",
        filename: "cachorro.jpg",
        tags: ["animal", "cachorro", "pet", "descansando"]
    },
    {
        id: 7,
        title: "Flores e folhas",
        filename: "flores.jpg",
        tags: ["flores", "natureza", "folha", "colorido"]
    },
    {
        id: 8,
        title: "Pilha de Livros",
        filename: "livros.jpg",
        tags: ["livros", "leitura", "conhecimento", "biblioteca"]
    },
    {
        id: 9,
        title: "Bicicleta Vintage",
        filename: "bicicleta.jpg",
        tags: ["bicicleta", "transporte", "vintage", "ciclista"]
    },
    {
        id: 10,
        title: "Instrumentos Musicais",
        filename: "musica.jpg",
        tags: ["música", "instrumentos", "arte", "som"]
    }
];

// Elementos DOM
const galleryGrid = document.getElementById('gallery-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const clearSearchBtn = document.getElementById('clear-search');
const photoCount = document.getElementById('photo-count');
const noResults = document.getElementById('no-results');

// Inicializa a galeria
function initGallery() {
    displayPhotos(photos);
    updatePhotoCount(photos.length);
}

// Exibe fotos na galeria
function displayPhotos(photosArray) {
    galleryGrid.innerHTML = '';
    
    if (photosArray.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }
    
    noResults.classList.add('hidden');
    
    photosArray.forEach(photo => {
        const photoCard = createPhotoCard(photo);
        galleryGrid.appendChild(photoCard);
    });
}

// Cria um card de foto
function createPhotoCard(photo) {
    const card = document.createElement('div');
    card.className = 'photo-card';
    card.setAttribute('data-id', photo.id);
    
    // USANDO SUAS IMAGENS LOCAIS AQUI ↓
    card.innerHTML = `
        <div class="photo-img-container">
            <img 
                src="src/images/${photo.filename}" 
                alt="${photo.title}" 
                class="photo-img"
                onerror="this.src='https://via.placeholder.com/400x300/cccccc/969696?text=Imagem+Não+Encontrada'"
            >
        </div>
        <div class="photo-info">
            <h3 class="photo-title">${photo.title}</h3>
            <div class="photo-tags">
                ${photo.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Filtra fotos baseado na busca
function filterPhotos(searchTerm) {
    const term = searchTerm.toLowerCase().trim();
    
    if (!term) {
        return photos;
    }
    
    return photos.filter(photo => {
    return photo.title.toLowerCase().includes(term); 
});

}

// Atualiza contador de fotos
function updatePhotoCount(count) {
    photoCount.textContent = `${count} ${count === 1 ? 'foto disponível' : 'fotos disponíveis'}`;
}

// Busca em tempo real
searchInput.addEventListener('input', function() {
    const searchTerm = this.value;
    const filteredPhotos = filterPhotos(searchTerm);
    displayPhotos(filteredPhotos);
    updatePhotoCount(filteredPhotos.length);
});

// Busca ao clicar no botão
searchBtn.addEventListener('click', function() {
    const searchTerm = searchInput.value;
    const filteredPhotos = filterPhotos(searchTerm);
    displayPhotos(filteredPhotos);
    updatePhotoCount(filteredPhotos.length);
});

// Limpar busca
clearSearchBtn.addEventListener('click', function() {
    searchInput.value = '';
    displayPhotos(photos);
    updatePhotoCount(photos.length);
    searchInput.focus();
});

// Busca ao pressionar Enter
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Inicializa a galeria quando a página carrega
document.addEventListener('DOMContentLoaded', initGallery);

// Para desenvolvimento: log para verificar se tudo está funcionando
console.log('Galeria de Fotos iniciada!');
console.log(`Total de fotos: ${photos.length}`);