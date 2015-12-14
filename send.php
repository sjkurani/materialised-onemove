<?php
$frm = $_POST['email'];
$sub = 'One move Drop us a line';
if (mail('sjkurani@gmail.com', $sub, "From: $frm")){
    echo "<p><b>Thank you for everything!</b></p>
<p>We'll contact you as soon as we find this.<br><i>(usually in a few hours)</i></p>";
  }else{
    echo "<p><b>There were errors sending your message.</b></p>
<p>Feel free to email us directly on
 <a href='mailto:info@onemove.in'>info@onemove.in</a>.We'll get back to you a soon as we find it.<i>(usually in a few hours)</i></p>
";
}
?>