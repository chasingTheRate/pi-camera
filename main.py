import webapp2
import Handlers

routes = [
    webapp2.Route(r'/', handler='Handlers.servoHandlers.ServoHandler', name='servoHome'),
    webapp2.Route(r'/actions', handler='Handlers.servoHandlers.ServoActionsHandler', name='servoActions'),
    webapp2.Route(r'/actions/<action>', handler='Handlers.servoHandlers.ServoActionHandler', name='servoAction')
]

app = webapp2.WSGIApplication(routes=routes)
