$(main);

function main() {
  console.log(getLastWord('this-is-a-test'));
  console.log('main is running');
  $('#project-card-caejd').click(toggleProjectOverviewAndDetail);

  $('#row-project-detail-caejd .close').click(() => {
    console.log('Close button clicked');
    $('#row-projects').toggle();
    $('#row-project-detail-caejd').toggle();
  });
}

function toggleProjectOverviewAndDetail() {
  console.log('Clicked of project overview card');
  let projIdent = getLastWord($(this).attr('id'));
  console.log(projIdent);
  let projDetailId = '#row-project-detail-' + projIdent;
  console.log(projDetailId);
  $('#row-projects').toggle();
  $(projDetailId).toggle();
};

function getLastWord(dashedString) {
  const words = dashedString.split('-');
  return words[words.length - 1];
}
