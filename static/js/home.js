$(document).ready(function () {
            show_comment()
        });


        function save_kimm() {

            let name = $('#name').val()
            let comment = $('#comment').val()

            $.ajax({
                type: 'POST',
                url: '/kimm_comment',
                data: {'name_give' : name, 'comment_give' : comment},
                success: function (response) {
                    console.log(response)
                    window.location.reload()
                }
            })
        }

        function show_comment() {
            $.ajax({
                type: "GET",
                url: "/kimm_comment",
                data: {},
                success: function (response) {
                    let rows = response['kimm_comments']
                    for (i = 0; i < rows.length; i++) {
                        let name = rows[i]['name']
                        let comment = rows[i]['comment']

                        let temp_html = `<div class="card">
                                            <div class="card-body">
                                                <blockquote class="blockquote mb-0">
                                                    <p>${comment}</p>
                                                    <footer class="blockquote-footer">${name}</footer>
                                                </blockquote>
                                            </div>
                                        </div>`

                        $("#comment-list").append(temp_html)


                    }
                }
            });
        }