
import webapp2

class ServoHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write('Servo Actions Handler')

class ServoActionsHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write('Servo Actions Handler')

class ServoActionHandler(webapp2.RequestHandler):
    def get(self, action):
        self.response.write('Servo Action: %s' % action)

class ProductHandler(webapp2.RequestHandler):
    def get(self, product_id):
        self.response.write('This is the ProductHandler. '
            'The product id is %s' % product_id)
