function mostrarCarro(modelo) {
    const display = document.getElementById('display-area');
    
    // Diccionario de imágenes (puedes cambiar los links por fotos locales)
    const imagenes = {
        'supra': 'https://p.turbosquid.com/ts-thumb/wq/EjWzCd/GM/img_20230105_073851/jpg/1672882607/600x600/fit_q87/74fd2c7b5bff395224a0e49ce6a96d51aa1e07e3/img_20230105_073851.jpg',
        'tesla': 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
        'gtr': 'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&w=800&q=80'
    };

    // Actualizamos el HTML del área de visualización
    display.innerHTML = `<img src="${imagenes[modelo]}" alt="Imagen de ${modelo}">`;
}