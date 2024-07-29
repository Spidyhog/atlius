from ..serializers import UserSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

class RegisterView(APIView):

    def post(self, request):
        serialzer=UserSerializer(data=request.data)
        serialzer.is_valid(raise_exception=True)
        user=serialzer.save()
        refresh=RefreshToken.for_user(user)
        return Response({
            "user":UserSerializer(user, context=self.get_serializer_context()).data,
            "access":str(refresh.access_token),
            "refresh":str(refresh),
        }, status=status.HTTP_201_CREATED)