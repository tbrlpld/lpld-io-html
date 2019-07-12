/* global $ */

/**
 * @description: Return only last word of given dash (`-`) separated sting
 * @param {string}: Dash separated string
 */
function getLastWord(dashedString) {
  const words = dashedString.split('-');
  return words[words.length - 1];
}

/**
 * @description: Toggle project overview and project detail row visibility.
 * @param {string}: project identifying sting that decides which project detail row is toggled.
 */
function toggleProjectOverviewAndDetail(projIdent) {
  const projDetailId = `#project-detail-row-${projIdent}`;
  console.log(projDetailId);
  $('#row-projects').toggle();
  $(projDetailId).toggle();
}

/**
 * @description: When close button for project detail row is clicked, determine the project
 *               identifier from the buttons parent row and toggle the detail row and the project
 *               overview.
 */
function projectDetailRowCloseButtonClicked() {
  console.log('Close button clicked');
  const closeButtonsDetailRow = $(this).parents('[id^=project-detail-row-]');
  console.log(closeButtonsDetailRow);
  console.log(closeButtonsDetailRow.attr('id'));
  const projIdent = getLastWord(closeButtonsDetailRow.attr('id'));
  console.log(projIdent);
  // Toggle the project overview and the detail (according to the click)
  toggleProjectOverviewAndDetail(projIdent);
}

/**
 * @description: When an overview card is clicked determine the associated project from the card's
 *               id and toggle visibility of project overview and detail
 */
function projectOverviewCardClicked() {
  console.log('Clicked of project overview card');
  // Extracting project identifier from clicked object
  const projIdent = getLastWord($(this).attr('id'));
  console.log(projIdent);
  // Toggle the project overview and the detail (according to the click)
  toggleProjectOverviewAndDetail(projIdent);
}

/*
 * @description: Main function that to trigger when document is loaded.
 */
function main() {
  $('.project-overview-card').click(projectOverviewCardClicked);
  $('.project-detail-row .close').click(projectDetailRowCloseButtonClicked);
}

$(main);
