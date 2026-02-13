// ============================================
// CATÁLOGO DE PRODUCTOS - EL RESOLVITO
// Versión: 3.0 (Estilo Imagen Grande)
// ============================================

window.catalogo = {
    version: '3.0',
    fecha: new Date().toISOString().split('T')[0],
    productos: [
        // ALIMENTOS Y CONSERVAS
        { id: 1, nombre: 'Atún en aceite', categoria: 'Alimentos y conservas', precio: 500, marca: 'Docanned Star', imagen: 'https://i.postimg.cc/76xHK6zt/atun_precio_500.png', descripcion: 'Atún en aceite vegetal', detalle: '200g', stock: 10, activo: true, department: 'mercado' },
        { id: 2, nombre: 'Pasta de tomate', categoria: 'Alimentos y conservas', precio: 380, marca: 'N/A', imagen: 'https://i.postimg.cc/gjjYPTNv/pasta_tomate_precio_350.png', descripcion: 'Pasta de tomate', detalle: '400g', stock: 10, activo: true, department: 'mercado' },
        { id: 3, nombre: 'Aceitunas Verdes', categoria: 'Alimentos y conservas', precio: 750, marca: 'Fragata', imagen: 'https://i.postimg.cc/4yyJTSBj/pimiento_presio_750.png', descripcion: 'Rodajas con Pimiento', detalle: '200g', stock: 10, activo: true, department: 'mercado' },
        { id: 4, nombre: 'Café Dualis', categoria: 'Alimentos y conservas', precio: 1450, marca: 'Dualis', imagen: 'https://i.postimg.cc/WbZBX2hN/cafe_dualis_250_g_precio_1450.png', descripcion: 'Café molido', detalle: '250g', stock: 10, activo: true, department: 'mercado' },
        { id: 5, nombre: 'Café Dufiltro', categoria: 'Alimentos y conservas', precio: 1450, marca: 'Dufiltro', imagen: 'https://i.postimg.cc/hG26fv31/cafe_Dufiltro_250_g_precio_1450.png', descripcion: 'Café molido', detalle: '250g', stock: 10, activo: true, department: 'mercado' },
        { id: 6, nombre: 'Pan rallado', categoria: 'Alimentos y conservas', precio: 450, marca: 'Enepa', imagen: 'https://i.postimg.cc/qvQwHpNJ/pan-rallado.webp', descripcion: 'Pan rallado para empanar', detalle: 'Paquete', stock: 10, activo: true, department: 'mercado' },
        { id: 7, nombre: 'Cartón de huevo', categoria: 'Alimentos y conservas', precio: 3000, marca: 'N/A', imagen: 'https://i.postimg.cc/sDWkwVvv/carton_de_huevo_30_u_precio_3100.png', descripcion: 'Huevos frescos', detalle: '30 unidades', stock: 10, activo: true, department: 'mercado' },
        { id: 8, nombre: 'Leche condensada', categoria: 'Alimentos y conservas', precio: 520, marca: 'N/A', imagen: 'https://i.postimg.cc/tT2XwjtT/leche_condensada.png', descripcion: 'Leche condensada', detalle: '397g', stock: 10, activo: true, department: 'mercado' },
        { id: 9, nombre: 'Harina blanca', categoria: 'Alimentos y conservas', precio: 600, marca: 'N/A', imagen: 'https://i.postimg.cc/3xc2NHFB/harina_blanca1_kg.png', descripcion: 'Harina de trigo', detalle: '1kg', stock: 10, activo: true, department: 'mercado' },
        { id: 42, nombre: 'Frijoles Negros', categoria: 'Alimentos y conservas', precio: 820, marca: 'Da Vicio', imagen: 'https://i.postimg.cc/wvkcjZNf/frijol_negro.png', descripcion: 'Frijoles negros', detalle: 'Paquete', stock: 5, activo: true, department: 'mercado' },
        { id: 43, nombre: 'Avena en Hojuelas', categoria: 'Alimentos y conservas', precio: 600, marca: 'El Puritano', imagen: 'https://i.postimg.cc/sDHmWkNL/avena.png', descripcion: 'Avena integral', detalle: 'Paquete', stock: 6, activo: true, department: 'mercado' },
        { id: 48, nombre: 'Atole', categoria: 'Alimentos y conservas', precio: 400, marca: 'N/A', imagen: 'https://i.postimg.cc/fTqCdGPh/atole.png', descripcion: 'Mezcla en polvo', detalle: 'Sobre', stock: 10, activo: true, department: 'mercado' },
        { id: 54, nombre: 'Aceite de girasol', categoria: 'Alimentos y conservas', precio: 990, marca: 'Naz', imagen: 'https://i.postimg.cc/hPZsmk5N/aceite.png', descripcion: 'Aceite vegetal', detalle: '1L', stock: 10, activo: true, department: 'mercado' },
        
        // SNACKS Y GOLOSINAS
        { id: 10, nombre: 'Chicoticos Pelly', categoria: 'Snacks y golosinas', precio: 400, marca: 'Pelly', imagen: 'https://i.postimg.cc/1zv2fXjZ/chicoticos_pelly_90_g_precio_400.png', descripcion: 'Snack de maíz', detalle: '90g', stock: 10, activo: true, department: 'mercado' },
        { id: 11, nombre: 'Papitas Campesinas', categoria: 'Snacks y golosinas', precio: 690, marca: 'Acho', imagen: 'https://i.postimg.cc/cLgrDtf9/papitas_campesinas_precio_690.png', descripcion: 'Papas fritas', detalle: 'Paquete', stock: 10, activo: true, department: 'mercado' },
        { id: 12, nombre: 'Pelly de Jamón', categoria: 'Snacks y golosinas', precio: 580, marca: 'Pelly', imagen: 'https://i.postimg.cc/pdQV7frX/pelly_jamon_precio_580.png', descripcion: 'Snack sabor jamón', detalle: 'Paquete', stock: 10, activo: true, department: 'mercado' },
        
        // SALSAS
        { id: 13, nombre: 'Mayonesa', categoria: 'Salsas', precio: 850, marca: 'N/A', imagen: 'https://i.postimg.cc/KzJZw2rR/mayonesa_precio_850.png', descripcion: 'Mayonesa', detalle: 'Frasco mediano', stock: 10, activo: true, department: 'mercado' },
        { id: 14, nombre: 'Mayonesa Grande', categoria: 'Salsas', precio: 1100, marca: 'N/A', imagen: 'https://i.postimg.cc/Px2t9jzz/mayonesa_precio1100.png', descripcion: 'Mayonesa', detalle: 'Frasco grande', stock: 10, activo: true, department: 'mercado' },
        { id: 57, nombre: 'Ketchup', categoria: 'Salsas', precio: 450, marca: 'N/A', imagen: 'https://i.postimg.cc/15XcyWzm/ketchup.png', descripcion: 'Salsa de tomate', detalle: 'Botella', stock: 10, activo: true, department: 'mercado' },
        { id: 58, nombre: 'Mostaza', categoria: 'Salsas', precio: 450, marca: 'N/A', imagen: 'https://i.postimg.cc/L6Wk5zqs/mostaza.png', descripcion: 'Salsa de mostaza', detalle: 'Botella', stock: 10, activo: true, department: 'mercado' },
        { id: 61, nombre: 'Vinagreta', categoria: 'Salsas', precio: 350, marca: 'N/A', imagen: 'https://i.postimg.cc/g0WZL4m5/vinagret.webp', descripcion: 'Salsa para ensaladas', detalle: 'Botella', stock: 10, activo: true, department: 'mercado' },
        
        // HIGIENE PERSONAL
        { id: 15, nombre: 'Cuchilla de Afeitar', categoria: 'Higiene personal', precio: 100, marca: 'N/A', imagen: 'https://i.postimg.cc/8CdkdW7x/cuchilla_de_afeitar_precio_100.png', descripcion: 'Cuchilla desechable', detalle: 'Unidad', stock: 10, activo: true, department: 'mercado' },
        { id: 16, nombre: 'Jabón Marwa', categoria: 'Higiene personal', precio: 150, marca: 'Marwa', imagen: 'https://i.postimg.cc/3RK8tRpR/jabon_marwa_precio_150.png', descripcion: 'Jabón de tocador', detalle: 'Pastilla', stock: 10, activo: true, department: 'mercado' },
        { id: 17, nombre: 'Papel Sanitario', categoria: 'Higiene personal', precio: 490, marca: 'La Excelencia', imagen: 'https://i.postimg.cc/bwW289qD/papel_sanitario_precio_490i.png', descripcion: 'Papel higiénico', detalle: 'Paquete', stock: 10, activo: true, department: 'mercado' },
        { id: 18, nombre: 'Toallas Sanitarias', categoria: 'Higiene personal', precio: 450, marca: 'Kotex', imagen: 'https://i.postimg.cc/KjjZyH0b/toallas_sanitarias_precio_450.png', descripcion: 'Con alas', detalle: 'Paquete', stock: 10, activo: true, department: 'mercado' },
        { id: 19, nombre: 'Toallas Húmedas', categoria: 'Higiene personal', precio: 690, marca: 'N/A', imagen: 'https://i.postimg.cc/W4ZSP3cw/toallas_humedas_precio_690.png', descripcion: 'Toallas de limpieza', detalle: 'Paquete', stock: 10, activo: true, department: 'mercado' },
        { id: 56, nombre: 'Jabón de Carbón', categoria: 'Higiene personal', precio: 200, marca: 'N/A', imagen: 'https://i.postimg.cc/Y9xfCZgB/jabon_carbon.png', descripcion: 'Jabón artesanal', detalle: 'Pastilla', stock: 10, activo: true, department: 'mercado' },
        
        // ASEO DEL HOGAR
        { id: 20, nombre: 'Jabón de Lavar', categoria: 'Aseo del hogar', precio: 250, marca: 'N/A', imagen: 'https://i.postimg.cc/V6YfK6Mz/jabon_de_lavar_precio_250.png', descripcion: 'Jabón para lavar', detalle: 'Pastilla', stock: 10, activo: true, department: 'mercado' },
        { id: 51, nombre: 'Detergente Tid', categoria: 'Aseo del hogar', precio: 630, marca: 'Tid', imagen: 'https://i.postimg.cc/3RhF7YkZ/detergente.png', descripcion: 'Detergente en polvo', detalle: 'Bolsa', stock: 6, activo: true, department: 'mercado' },
        
        // PERFUMES Y DESODORANTES
        { id: 21, nombre: 'Perfume Candy', categoria: 'Perfumes y desodorantes', precio: 3100, marca: 'Candy', imagen: 'https://i.postimg.cc/vTgJRyhp/perfume_candy_precio_3100.png', descripcion: 'Perfume', detalle: '50ml', stock: 10, activo: true, department: 'mercado' },
        { id: 22, nombre: 'Perfume Genérico', categoria: 'Perfumes y desodorantes', precio: 3100, marca: 'N/A', imagen: 'https://i.postimg.cc/ZKrT0PPG/perfume_precio_3100.png', descripcion: 'Perfume', detalle: '50ml', stock: 10, activo: true, department: 'mercado' },
        { id: 23, nombre: 'Perfume Q', categoria: 'Perfumes y desodorantes', precio: 3100, marca: 'Q', imagen: 'https://i.postimg.cc/CL03P3Dn/perfume_q_precio_3100.png', descripcion: 'Perfume', detalle: '50ml', stock: 10, activo: true, department: 'mercado' },
        { id: 24, nombre: 'Desodorante Obao', categoria: 'Perfumes y desodorantes', precio: 1100, marca: 'Obao', imagen: 'https://i.postimg.cc/PxtXSxD2/desodorante_obao_precio_1100.png', descripcion: 'Roll-on', detalle: 'Unidad', stock: 10, activo: true, department: 'mercado' },
        { id: 25, nombre: 'Desodorante Rush Blanco', categoria: 'Perfumes y desodorantes', precio: 650, marca: 'Rush', imagen: 'https://i.postimg.cc/FR9rTRS8/desodorante_rush_blanco_precio_1000.png', descripcion: 'Roll-on', detalle: 'Unidad', stock: 10, activo: true, department: 'mercado' },
        { id: 26, nombre: 'Desodorante Rush', categoria: 'Perfumes y desodorantes', precio: 650, marca: 'Rush', imagen: 'https://i.postimg.cc/sXVjTXSF/desodorante_rush_precio_1000.png', descripcion: 'Roll-on', detalle: 'Unidad', stock: 10, activo: true, department: 'mercado' },
        { id: 27, nombre: 'Colonia Niña', categoria: 'Perfumes y desodorantes', precio: 1100, marca: 'N/A', imagen: 'https://i.postimg.cc/G3v04rsM/colonia_nina.png', descripcion: 'Colonia infantil', detalle: '100ml', stock: 10, activo: true, department: 'mercado' },
        
        // PASTAS Y FIDEOS
        { id: 28, nombre: 'Macarrones', categoria: 'Pastas y fideos', precio: 300, marca: 'Ada', imagen: 'https://i.postimg.cc/Hsmz1H69/macarrones_precio_300.png', descripcion: 'Pasta', detalle: '460g', stock: 10, activo: true, department: 'mercado' },
        { id: 29, nombre: 'Sopas instantáneas', categoria: 'Pastas y fideos', precio: 160, marca: 'Varios', imagen: 'https://i.postimg.cc/FzNTpQqK/sopas_instantaneas_precio_160.png', descripcion: 'Sopa rápida', detalle: 'Paquete', stock: 10, activo: true, department: 'mercado' },
        { id: 44, nombre: 'Espaguetis', categoria: 'Pastas y fideos', precio: 270, marca: 'Topside', imagen: 'https://i.postimg.cc/2yLp0hKg/espaguetis.png', descripcion: 'Pasta larga', detalle: 'Paquete', stock: 15, activo: true, department: 'mercado' },
        
        // BEBIDAS
        { id: 30, nombre: 'Licor de fresa', categoria: 'Bebidas', precio: 2500, marca: 'Albín', imagen: 'https://i.postimg.cc/59YT2x5p/licor_de_fresa_precio_2500.png', descripcion: 'Crema de fresa', detalle: 'Botella', stock: 10, activo: true, department: 'mercado' },
        { id: 31, nombre: 'Licor Cocobay', categoria: 'Bebidas', precio: 2500, marca: 'Cocobay', imagen: 'https://i.postimg.cc/7ZDW90Fz/locor_cocobay_precio_2500.png', descripcion: 'Licor de coco', detalle: 'Botella', stock: 10, activo: true, department: 'mercado' },
        { id: 32, nombre: 'Whisky Spirit', categoria: 'Bebidas', precio: 320, marca: 'Spirit', imagen: 'https://i.postimg.cc/4N8W6q1t/tea_precio_320.png', descripcion: 'Whisky', detalle: '200ml', stock: 10, activo: true, department: 'mercado' },
        { id: 33, nombre: 'Whisky Sir Albin', categoria: 'Bebidas', precio: 1350, marca: 'Albín', imagen: 'https://i.postimg.cc/cLyrb4T0/whisky_1L_precio_1350.png', descripcion: 'Whisky', detalle: '1L', stock: 10, activo: true, department: 'mercado' },
        { id: 34, nombre: 'Whisky Sir Albin', categoria: 'Bebidas', precio: 550, marca: 'Albín', imagen: 'https://i.postimg.cc/y84kbYnC/whisky_sir_albin_precio_550.png', descripcion: 'Whisky', detalle: '500ml', stock: 10, activo: true, department: 'mercado' },
        { id: 35, nombre: 'Vino Pluvium', categoria: 'Bebidas', precio: 1200, marca: 'Pluvium', imagen: 'https://i.postimg.cc/XNLLWmmx/vino_pluvium_precio_1200.png', descripcion: 'Vino tinto', detalle: 'Botella', stock: 10, activo: true, department: 'mercado' },
        { id: 37, nombre: 'Cerveza Cristal', categoria: 'Bebidas', precio: 300, marca: 'Cristal', imagen: 'https://i.postimg.cc/d1JxDCW3/cervaza-cristal-1.jpg', descripcion: 'Cerveza', detalle: 'Lata 355ml', stock: 12, activo: true, department: 'mercado' },
        { id: 38, nombre: 'Cerveza Holland', categoria: 'Bebidas', precio: 230, marca: 'Holland', imagen: 'https://i.postimg.cc/nLn8gryr/cerveza-holland-(1).png', descripcion: 'Cerveza importada', detalle: 'Lata', stock: 10, activo: true, department: 'mercado' },
        { id: 39, nombre: 'Refresco Pepsi', categoria: 'Bebidas', precio: 260, marca: 'Pepsi', imagen: 'https://i.postimg.cc/ZY7psrx7/pepsi.webp', descripcion: 'Refresco', detalle: 'Lata', stock: 15, activo: true, department: 'mercado' },
        { id: 40, nombre: 'Jugo YES', categoria: 'Bebidas', precio: 620, marca: 'YES', imagen: 'https://i.postimg.cc/fy2cxdBH/jugo_j.png', descripcion: 'Jugo', detalle: '1L', stock: 8, activo: true, department: 'mercado' },
        { id: 41, nombre: 'Agua Embotellada', categoria: 'Bebidas', precio: 650, marca: 'N/A', imagen: 'https://i.postimg.cc/m2gVtL8J/agua.png', descripcion: 'Agua', detalle: '1.5L', stock: 10, activo: true, department: 'mercado' },
        { id: 59, nombre: 'Cerveza Parranda', categoria: 'Bebidas', precio: 250, marca: 'Parranda', imagen: 'https://i.postimg.cc/d31dt1w9/parranda.webp', descripcion: 'Cerveza', detalle: 'Lata', stock: 10, activo: true, department: 'mercado' },
        
        // CONGELADOS
        { id: 46, nombre: 'Patatas Fritas', categoria: 'Congelados', precio: 1200, marca: 'Vima', imagen: 'https://i.postimg.cc/rs76dmR8/patatas_fritas.png', descripcion: 'Papas prefritas', detalle: '1kg', stock: 4, activo: true, department: 'mercado' },
        { id: 47, nombre: 'Nuggets de Pollo', categoria: 'Congelados', precio: 550, marca: 'La Perla', imagen: 'https://i.postimg.cc/KYSnrxDm/nuggets_de_pollo.webp', descripcion: 'Nuggets', detalle: 'Paquete', stock: 5, activo: true, department: 'mercado' },
        { id: 50, nombre: 'Croquetas', categoria: 'Congelados', precio: 450, marca: 'N/A', imagen: 'https://i.postimg.cc/br4XGJSy/cdroquetas_sabor_jamon.png', descripcion: 'Sabor jamón', detalle: 'Bolsa', stock: 10, activo: true, department: 'mercado' },
        { id: 55, nombre: 'Bocaditos de Pollo', categoria: 'Congelados', precio: 550, marca: 'N/A', imagen: 'https://i.postimg.cc/GpGxZHmd/bocadito_de_pollo.png', descripcion: 'Crujientes', detalle: 'Paquete', stock: 10, activo: true, department: 'mercado' },
        { id: 60, nombre: 'Lomo de Res', categoria: 'Congelados', precio: 800, marca: 'N/A', imagen: 'https://i.postimg.cc/nh7mLNbw/res.webp', descripcion: 'Corte de res', detalle: '250g', stock: 10, activo: true, department: 'mercado' },
        
        // ELECTRÓNICOS
        { id: 36, nombre: 'Baterías Triple A', categoria: 'Electrónicos', precio: 300, marca: 'N/A', imagen: 'https://i.postimg.cc/DZ2vxZsT/Gemini_Generated_Image_824rio824rio824r.png', descripcion: 'Baterías', detalle: 'Pack 4 unidades', stock: 10, activo: true, department: 'mercado' },
        
        // VARIOS
        { id: 53, nombre: 'Fósforos', categoria: 'Varios', precio: 30, marca: 'N/A', imagen: 'https://i.postimg.cc/8P1txyJ1/fsforos.png', descripcion: 'Caja de cerillos', detalle: 'Caja', stock: 50, activo: true, department: 'mercado' }
    ],
    
    // Función para obtener todos los productos activos
    obtenerActivos: function() {
        return this.productos.filter(p => p.activo === true && p.stock > 0);
    },
    
    // Función para buscar por ID
    obtenerPorId: function(id) {
        return this.productos.find(p => p.id == id);
    },
    
    // Función para buscar por categoría
    obtenerPorCategoria: function(categoria) {
        return this.productos.filter(p => p.categoria === categoria && p.activo === true);
    },
    
    // Función para buscar por texto
    buscar: function(termino) {
        if (!termino) return this.obtenerActivos();
        const t = termino.toLowerCase();
        return this.productos.filter(p => 
            p.activo === true && 
            (p.nombre.toLowerCase().includes(t) || 
             p.descripcion.toLowerCase().includes(t) || 
             p.categoria.toLowerCase().includes(t))
        );
    }
};

// Exportar para compatibilidad
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.catalogo;
}

console.log(`📦 Catálogo El Resolvito v3.0 cargado: ${window.catalogo.productos.length} productos disponibles`);
