const tooltipTriggerContainers = document.querySelectorAll('.tooltip-trigger-container');
tooltipTriggerContainers.forEach((tooltipTriggerContainer) => {
    tooltipTriggerContainer.addEventListener('mousemove', (e) => {
        // Set CSS variables to store cursor position
        document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px');
        document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px');
        // Update the tooltip position
        const tooltipContent = tooltipTriggerContainer.querySelector('.tooltip-content');
        tooltipContent.style.transform = 'none';
        tooltipContent.classList.add('active');
    });
    tooltipTriggerContainer.addEventListener('mouseleave', () => {
        // Hide the tooltip when leaving the trigger element
        const tooltipContent = tooltipTriggerContainer.querySelector('.tooltip-content');
        tooltipContent.style.transform = 'translate(-100%, -100%)';
        tooltipContent.classList.remove('active');
    });
});

const clickText = document.getElementById('clickText');
const container = document.getElementById('container');
clickText.addEventListener('click', () => {
    if (container.style.display === 'none') {
        container.style.display = 'block'; 
    } else {
        container.style.display = 'none'; 
    }
});

const clickText2 = document.getElementById('clickText2');
const container2 = document.getElementById('container2');

clickText2.addEventListener('click', () => {
    if (container2.style.display === 'none') {
        container2.style.display = 'block'; 
    } else {
        container2.style.display = 'none'; 
    }
});


let selectedOption = 'Half-Orc';

function toggleInfo(race, cell) {
    // Toggle the display of the selected race's info section
    const selectedInfo = document.getElementById(race + 'Info');
    if (selectedOption !== race) {
        selectedInfo.style.display = 'block';
        document.getElementById(selectedOption + 'Info').style.display = 'none';
        selectedOption = race;
    }
    const cells = document.querySelectorAll('.options-cell');
    cells.forEach(cell => {
        cell.classList.remove('selected');
    });
    cell.classList.add('selected');
    const dropdown = document.getElementById('dropdown');
    const tableWidth = document.querySelector('.options-table').offsetWidth;
    dropdown.style.width = tableWidth + 'px';
}

window.onload = function() {
    const defaultCell = document.querySelector('.options-cell');
    toggleInfo(selectedOption, defaultCell);
}
