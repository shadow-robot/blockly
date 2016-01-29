import rospy
from sound_play.libsoundplay import SoundClient

try:
    if text_to_speech_initialization is not None:
        pass
except NameError:
    text_to_speech_initialization = True


if text_to_speech_initialization:

    text_to_speech_initialization = False

    rospy.init_node("text_to_speech_node", anonymous=True)
    sound_handle = SoundClient()
    rospy.sleep(1)

sound_handle.say(text_command, "voice_kal_diphone")
