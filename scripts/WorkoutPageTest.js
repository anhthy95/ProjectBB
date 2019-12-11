//global variables
var workoutList = [];
var longSentence = "";
var email = "";

<script type="text/javascript">
    function loadEvents() {
        var mailString;
        function updateMailString() {
            mailString = '?subject=' + encodeURIComponent($('#subject').val())
                + '&body=' + encodeURIComponent($('#message').val());
            $('#mail-link').attr('href',  'mailto:person@email.com' + mailString);
        }
        $( "#subject" ).focusout(function() { updateMailString(); });
        $( "#message" ).focusout(function() { updateMailString(); });
        updateMailString();
    }
</script>
