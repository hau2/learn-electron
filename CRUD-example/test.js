const root = document.createElement('root');
const h1 = document.createElement('h1');

h1.innerHTML = 'Hello World';
h1.id = 'heading';
h1.className = 'test class-2';
Object.assign(h1.style, {
    color: 'red',
    fontSize: '20px',
    lineHeight: '24px'
})
console.log(h1);
root.appendChild(h1);
