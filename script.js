const container = document.getElementById("grid-container");
const resetBtn = document.getElementById("reset-btn");

function createGrid(size) {
  // Clear existing grid
  container.innerHTML = "";

  // Set CSS grid template
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create grid cells
  const totalCells = size * size;
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");

    // Trail effect
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "#333";
    });

    container.appendChild(cell);
  }
}

// Initial grid on page load
createGrid(16);

// Handle button click
resetBtn.addEventListener("click", () => {
  let newSize = prompt("Enter new grid size (max 100):");

  // Convert to number and validate
  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    return;
  }

  createGrid(newSize);
});
