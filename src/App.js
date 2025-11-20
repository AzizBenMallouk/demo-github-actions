// src/App.js

export function sum(a, b) {
  return a + b;
}

export function createApp() {
  const container = document.createElement('div');
  container.style.minHeight = '100vh';
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.justifyContent = 'center';
  container.style.background = 'linear-gradient(135deg, #0f172a, #1e293b)';
  container.style.color = '#e5e7eb';
  container.style.padding = '2rem';

  const card = document.createElement('div');
  card.style.background = '#020617';
  card.style.borderRadius = '1rem';
  card.style.padding = '2rem 2.5rem';
  card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
  card.style.maxWidth = '480px';
  card.style.width = '100%';

  const title = document.createElement('h1');
  title.textContent = 'GitHub Actions – Demo CI/CD';
  title.style.fontSize = '1.5rem';
  title.style.marginBottom = '0.75rem';

  const subtitle = document.createElement('p');
  subtitle.textContent =
    'Cette petite app JS est buildée, testée et déployée automatiquement sur S3 & CloudFront.';

  subtitle.style.fontSize = '0.95rem';
  subtitle.style.color = '#9ca3af';
  subtitle.style.marginBottom = '1.5rem';

  const counterLabel = document.createElement('p');
  counterLabel.textContent = 'Nombre de déploiements “simulés” :';
  counterLabel.style.marginBottom = '0.5rem';
  counterLabel.style.fontSize = '0.9rem';

  const counterValue = document.createElement('div');
  counterValue.textContent = '0';
  counterValue.style.fontSize = '2.5rem';
  counterValue.style.fontWeight = 'bold';
  counterValue.style.marginBottom = '1rem';

  const status = document.createElement('p');
  status.textContent = 'Clique sur le bouton pour simuler un nouveau déploiement.';
  status.style.fontSize = '0.9rem';
  status.style.color = '#a5b4fc';
  status.style.marginBottom = '1.5rem';

  const button = document.createElement('button');
  button.textContent = '🚀 Lancer un “déploiement”';
  button.style.border = 'none';
  button.style.borderRadius = '999px';
  button.style.padding = '0.75rem 1.5rem';
  button.style.cursor = 'pointer';
  button.style.fontSize = '0.95rem';
  button.style.fontWeight = '600';
  button.style.background =
    'linear-gradient(135deg, #6366f1, #22c55e)';
  button.style.color = 'white';
  button.style.boxShadow = '0 10px 25px rgba(79, 70, 229, 0.4)';
  button.style.transition = 'transform 0.1s ease, box-shadow 0.1s ease';

  let count = 0;

  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-1px)';
    button.style.boxShadow = '0 14px 30px rgba(79, 70, 229, 0.5)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = '0 10px 25px rgba(79, 70, 229, 0.4)';
  });

  button.addEventListener('click', () => {
    count = sum(count, 1); // on utilise la fonction testée
    counterValue.textContent = String(count);

    if (count === 1) {
      status.textContent =
        'Premier déploiement simulé ! Le pipeline CI/CD fonctionne ✅';
    } else if (count < 5) {
      status.textContent = `Tu as simulé ${count} déploiements. GitHub Actions travaille pour toi 🔁`;
    } else {
      status.textContent =
        'Tu es chaud ! Imagine ça connecté à S3 & CloudFront pour un vrai projet en production 😎';
    }
  });

  card.appendChild(title);
  card.appendChild(subtitle);
  card.appendChild(counterLabel);
  card.appendChild(counterValue);
  card.appendChild(status);
  card.appendChild(button);
  container.appendChild(card);

  return container;
}
