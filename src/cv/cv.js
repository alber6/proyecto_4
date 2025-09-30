// ===== CV FUNCTIONALITY =====

// Ejecutar cuando la página esté cargada
document.addEventListener('DOMContentLoaded', function() {
    console.log('CV cargado correctamente');
    
    // Inicializar funcionalidades
    initializeCV();
});

// Función principal de inicialización
function initializeCV() {
    // Agregar animaciones de entrada
    addEntryAnimations();
    
    // Configurar botones interactivos
    setupInteractiveElements();
    
    // Configurar impresión optimizada
    setupPrintSettings();
}

// Animaciones de entrada para las secciones
function addEntryAnimations() {
    const sections = document.querySelectorAll('.cv-section');
    const projects = document.querySelectorAll('.project');
    
    // Observer para animaciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Aplicar animaciones iniciales
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(section);
    });
    
    projects.forEach((project, index) => {
        project.style.opacity = '0';
        project.style.transform = 'translateY(20px)';
        project.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(project);
    });
}

// Configurar elementos interactivos
function setupInteractiveElements() {
    // Copiar email al hacer click
    const emailElements = document.querySelectorAll('a[href*="mailto"], p:contains("@")');
    emailElements.forEach(element => {
        if (element.textContent.includes('@')) {
            element.style.cursor = 'pointer';
            element.title = 'Click para copiar email';
            element.addEventListener('click', copyEmailToClipboard);
        }
    });
    
    // Hover effects para proyectos
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.style.borderLeft = '4px solid #667eea';
        });
        
        project.addEventListener('mouseleave', function() {
            this.style.borderLeft = 'none';
        });
    });
    
    // Tracking de clicks en enlaces externos
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log(`Click en enlace externo: ${this.href}`);
            // Aquí podrías agregar analytics si los necesitas
        });
    });
}

// Función para copiar email al portapapeles
function copyEmailToClipboard(event) {
    const emailText = event.target.textContent.match(/[\w.-]+@[\w.-]+\.[A-Za-z]{2,}/);
    
    if (emailText) {
        navigator.clipboard.writeText(emailText[0]).then(() => {
            showNotification('📧 Email copiado al portapapeles');
        }).catch(err => {
            console.log('No se pudo copiar el email:', err);
            fallbackCopyTextToClipboard(emailText[0]);
        });
    }
}

// Fallback para copiar texto en navegadores antiguos
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showNotification('📧 Email copiado al portapapeles');
        }
    } catch (err) {
        console.error('No se pudo copiar el texto: ', err);
    }
    
    document.body.removeChild(textArea);
}

// Mostrar notificaciones temporales
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        z-index: 1000;
        font-weight: 600;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Configurar impresión optimizada
function setupPrintSettings() {
    // Detectar cuando se va a imprimir
    window.addEventListener('beforeprint', function() {
        console.log('Preparando impresión...');
        
        // Ajustar elementos para impresión
        document.body.classList.add('printing');
        
        // Expandir elementos colapsados si los hay
        const collapsedElements = document.querySelectorAll('.collapsed');
        collapsedElements.forEach(element => {
            element.classList.remove('collapsed');
        });
    });
    
    window.addEventListener('afterprint', function() {
        console.log('Impresión finalizada');
        document.body.classList.remove('printing');
    });
}

// Función para descargar CV como PDF (usando window.print)
function downloadCV() {
    // Configurar título de la ventana de impresión
    const originalTitle = document.title;
    document.title = 'CV - Tu Nombre - Desarrollador Web';
    
    // Mostrar notificación
    showNotification('📄 Abriendo diálogo de impresión/guardado...');
    
    // Abrir diálogo de impresión
    window.print();
    
    // Restaurar título original
    setTimeout(() => {
        document.title = originalTitle;
    }, 1000);
}

// Función para volver al portfolio con transición suave
function goToPortfolio() {
    showNotification('🏠 Regresando al portfolio...');
    
    setTimeout(() => {
        window.location.href = './index.html';
    }, 500);
}

// Función para abrir enlaces externos con confirmación
function openExternalLink(url, type = 'enlace') {
    const confirmed = confirm(`¿Deseas abrir ${type} en una nueva pestaña?\n${url}`);
    
    if (confirmed) {
        window.open(url, '_blank');
    }
}

// Función de utilidad para detectar si es móvil
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Ajustes específicos para móvil
if (isMobile()) {
    document.addEventListener('DOMContentLoaded', function() {
        // Mejorar taps en móvil
        const clickableElements = document.querySelectorAll('a, button, .project');
        clickableElements.forEach(element => {
            element.style.cursor = 'pointer';
            element.style.webkitTapHighlightColor = 'rgba(102, 126, 234, 0.2)';
        });
        
        console.log('Optimizaciones móvil aplicadas');
    });
}

// Función para validar que todos los enlaces funcionan
function validateLinks() {
    const links = document.querySelectorAll('a[href^="http"]');
    console.log(`Encontrados ${links.length} enlaces externos:`);
    
    links.forEach((link, index) => {
        console.log(`${index + 1}. ${link.textContent.trim()} -> ${link.href}`);
    });
}

// Ejecutar validación en desarrollo (comentar en producción)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    setTimeout(validateLinks, 2000);
}