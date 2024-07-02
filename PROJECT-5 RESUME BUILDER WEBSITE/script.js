$(document).ready(function () {
    // Add achievement when plus button is clicked
    $('#addAchievementBtn').click(function () {
        var achievementsSection = $('.achievements').first().clone(); // Clone the first achievements section
        achievementsSection.find('input[type="text"]').val(''); // Clear input values

        $('.achievements').last().after(achievementsSection); // Append cloned section
    });
});

$(document).ready(function () {
    // Add experience section when plus button is clicked
    $('#addExperienceBtn').click(function () {
        var experienceSection = $('.experience').first().clone(); // Clone the first experience section
        experienceSection.find('input[type="text"]').val(''); // Clear text input values
        experienceSection.find('input[type="date"]').val(''); // Clear date input values

        $('.experience').last().after(experienceSection); // Append cloned section
    });
});

$(document).ready(function () {
    // Add experience section when plus button is clicked
    $('#addEducationBtn').click(function () {
        var educationSection = $('.education').first().clone(); // Clone the first experience section
        educationSection.find('input[type="text"]').val(''); // Clear text input values
        educationSection.find('input[type="date"]').val(''); // Clear date input values

        $('.education').last().after(educationSection); // Append cloned section
    });
});

$(document).ready(function () {
    $('#addProjectBtn').on('click', function () {
        var $projectsInfo = $('.projects-info').first().clone(); // Clone the first .projects-info section

        // Clear input fields in the cloned section
        $projectsInfo.find('input[type="text"]').val('');

        // Append the cloned section to the projects container
        $('.projects').append($projectsInfo);
    });
});