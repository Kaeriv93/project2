
const $comment = $('#addingcomment')

const $commentButton = $('.comment-button')

const $cancelButton = $('.cancel')

const $editPin = $('.edit-pin')

const $editDelete = $('.edit-delete')

const $textarea = $('#addingcomment')




$editPin.click(()=>{
    $editPin.addClass('hidden')
    $editDelete.removeClass('hidden')

})

$comment.click(()=>{
    $commentButton.removeClass('hidden')
    $cancelButton.removeClass('hidden')
})

$cancelButton.click(()=>{
    $textarea.val('')
    $commentButton.addClass('hidden')
    $cancelButton.addClass('hidden')
})

